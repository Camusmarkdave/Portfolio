import { Location } from '@angular/common';
import { Component, inject, isDevMode, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { developer, stats } from '../../data/profile';
import { Project, featuredProjects, projects } from '../../data/projects';
import { pageSpeedUrl } from '../../data/site';
import { skills } from '../../data/skills';
import { CaseStudyDialogComponent } from '../../shared/case-study-dialog/case-study-dialog';
import { CountUpComponent } from '../../shared/count-up';
import { IconComponent } from '../../shared/icon';
import { ProjectCardComponent } from '../../shared/project-card/project-card';
import { RevealDirective } from '../../shared/reveal.directive';
import { WordsComponent } from '../../shared/words';
import { CodeWindowComponent } from './code-window';
import { performanceNotes, services, testimonials } from './home.data';

/** Case studies are shareable: /#case-<slug> opens one on load. */
const CASE_PREFIX = 'case-';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    IconComponent,
    RevealDirective,
    ProjectCardComponent,
    CaseStudyDialogComponent,
    CodeWindowComponent,
    CountUpComponent,
    WordsComponent,
  ],
  templateUrl: './home.html',
})
export class HomeComponent {
  private readonly location = inject(Location);

  protected readonly developer = developer;
  protected readonly featured = featuredProjects;
  protected readonly projectCount = projects.length;
  /** The archive tile's marquee lists every project; visitors can pause it. */
  protected readonly allProjects = projects;
  protected readonly marqueePaused = signal(false);
  protected readonly stats = stats;
  protected readonly dailyTools = skills.daily;
  protected readonly otherTools = skills.alsoUsed;
  protected readonly services = services;
  protected readonly performanceNotes = performanceNotes;
  protected readonly pageSpeedUrl = pageSpeedUrl;
  /** Sample quotes only preview the layout in `ng serve`; production never shows them. */
  protected readonly testimonials = testimonials.filter((quote) => !quote.sample || isDevMode());

  /**
   * Bento placement, matched by position. 12 columns on desktop, 2 on tablets,
   * a single stack on phones. (Full class names, so Tailwind can find them.)
   */
  protected readonly projectSlots = ['sm:col-span-2 lg:col-span-8', 'lg:col-span-4', 'lg:col-span-4'];
  protected readonly serviceSlots = ['lg:col-span-4', 'lg:col-span-4', 'sm:col-span-2 lg:col-span-8'];

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
