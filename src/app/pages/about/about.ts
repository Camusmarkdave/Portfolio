import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  Certificate,
  CertificateCategory,
  certificateCategories,
  certificateStatus,
  certificates,
  education,
} from '../../data/credentials';
import { stats } from '../../data/profile';
import { chipStart, skills } from '../../data/skills';
import { CountUpComponent } from '../../shared/count-up';
import { IconComponent } from '../../shared/icon';
import { injectListTransition } from '../../shared/list-transition';
import { ModalDirective } from '../../shared/modal.directive';
import { RevealDirective } from '../../shared/reveal.directive';
import { designTokens, principles } from './about.data';

type Filter = 'All' | CertificateCategory;

@Component({
  selector: 'app-about',
  imports: [RouterLink, IconComponent, RevealDirective, ModalDirective, CountUpComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  protected readonly stats = stats;
  protected readonly principles = principles;
  protected readonly designTokens = designTokens;
  protected readonly education = education;
  protected readonly skills = skills;
  protected readonly chipStart = chipStart;
  protected readonly current = education.find((item) => item.current);
  private readonly transition = injectListTransition();

  /** Bento placement, matched by position (full class names so Tailwind can find them). */
  protected readonly principleSlots = ['lg:col-span-7 lg:row-span-2', 'lg:col-span-5', 'lg:col-span-5'];
  protected readonly educationSlots = ['lg:col-span-7', 'lg:col-span-5'];

  // Certifications: filter + full-size viewer.
  protected readonly filters: Filter[] = ['All', ...certificateCategories];
  protected readonly counts = Object.fromEntries(
    this.filters.map((f) => [f, f === 'All' ? certificates.length : certificates.filter((c) => c.category === f).length]),
  ) as Record<Filter, number>;
  /** Worked out once per visit from today's date, so expiry labels never go stale. */
  protected readonly statuses = new Map(certificates.map((cert) => [cert.id, certificateStatus(cert)]));
  protected readonly filter = signal<Filter>('All');
  protected readonly visibleCertificates = computed(() =>
    this.filter() === 'All' ? certificates : certificates.filter((cert) => cert.category === this.filter()),
  );
  protected readonly activeCertificate = signal<Certificate | null>(null);
  protected readonly totalCertificates = certificates.length;

  /** Filters the certificates; the cards glide to their new places instead of jumping. */
  protected pick(option: Filter, list: HTMLElement): void {
    this.transition(list, () => this.filter.set(option));
  }
}
