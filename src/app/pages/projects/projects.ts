import { Location } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { socials } from '../../data/profile';
import { Project, coverSrcset, projects } from '../../data/projects';
import { CaseStudyDialogComponent } from '../../shared/case-study-dialog/case-study-dialog';
import { IconComponent } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';
import { processSteps } from './projects.data';

/** Case studies are shareable here too: /projects#case-<slug> opens one on load. */
const CASE_PREFIX = 'case-';
const ALL = 'All';

/**
 * One showcase row per project: the full screenshot (never cropped) beside
 * the details, alternating sides on desktop and stacked on phones.
 */
@Component({
  selector: 'app-projects',
  imports: [IconComponent, RevealDirective, CaseStudyDialogComponent],
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  private readonly location = inject(Location);

  protected readonly total = projects.length;
  protected readonly processSteps = processSteps;
  protected readonly githubUrl = socials.find((social) => social.icon === 'github')?.href;

  // Category filter. The categories come from the data, in the order they first appear.
  protected readonly filters = [ALL, ...new Set(projects.map((project) => project.category))];
  protected readonly counts: Record<string, number> = Object.fromEntries(
    this.filters.map((f) => [f, f === ALL ? projects.length : projects.filter((p) => p.category === f).length]),
  );
  protected readonly filter = signal(ALL);
  protected readonly visibleProjects = computed(() =>
    this.filter() === ALL ? projects : projects.filter((project) => project.category === this.filter()),
  );
  /** Numbers follow the full list, so a project keeps its "03" while the list is filtered. */
  protected readonly numbers = new Map(projects.map((project, i) => [project.slug, String(i + 1).padStart(2, '0')]));

  /** Rendered screenshot widths per breakpoint (7 of 12 columns from lg up), so phones fetch the 640px copy. */
  protected readonly coverSizes =
    '(min-width: 1280px) 624px, (min-width: 1024px) calc(58vw - 85px), (min-width: 640px) calc(100vw - 88px), calc(100vw - 56px)';
  protected readonly srcset = coverSrcset;

  protected readonly activeProject = signal<Project | null>(null);

  constructor() {
    // Covers a fresh load of a shared link and a #case-… pasted while already here.
    inject(ActivatedRoute)
      .fragment.pipe(takeUntilDestroyed())
      .subscribe((fragment) => {
        if (!fragment?.startsWith(CASE_PREFIX)) return;
        const slug = fragment.slice(CASE_PREFIX.length);
        const project = projects.find((candidate) => candidate.slug === slug);
        if (project) this.activeProject.set(project);
      });
  }

  protected openCase(project: Project): void {
    this.activeProject.set(project);
    // replaceState, not a router navigation: shareable URL, no scroll jump, no extra history entry.
    this.location.replaceState(`${this.location.path()}#${CASE_PREFIX}${project.slug}`, '', this.location.getState());
  }

  protected closeCase(): void {
    this.activeProject.set(null);
    this.location.replaceState(this.location.path(), '', this.location.getState());
  }
}
