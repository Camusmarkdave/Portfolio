import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { certificateStatus, certificates, education } from '../../data/credentials';
import { experience } from '../../data/experience';
import { resumePdf } from '../../data/profile';
import { Project, projects } from '../../data/projects';
import { chipStart, skills } from '../../data/skills';
import { CaseStudyDialogComponent } from '../../shared/case-study-dialog/case-study-dialog';
import { IconComponent } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';
import { WordsComponent } from '../../shared/words';

/** The academic projects the resume PDF lists, in its order. The Projects page has them all. */
const RESUME_PROJECTS = ['danonos-donut', 'the-four-who-adore', 'ecoquest'];

/**
 * The web version of the resume PDF (src/assets/uploads/Resume.pdf): same
 * sections and facts, read from src/app/data, plus the supervisor's quote and
 * links into each case study.
 */
@Component({
  selector: 'app-resume',
  imports: [RouterLink, IconComponent, RevealDirective, CaseStudyDialogComponent, WordsComponent],
  templateUrl: './resume.html',
})
export class ResumeComponent {
  protected readonly pdf = resumePdf;

  protected readonly experience = experience;
  protected readonly projects = RESUME_PROJECTS.map((slug) => projects.find((project) => project.slug === slug)).filter(
    (project): project is Project => project !== undefined,
  );
  protected readonly totalProjects = projects.length;
  protected readonly education = education.filter((item) => item.current);
  protected readonly skills = skills;
  protected readonly chipStart = chipStart;
  /** The resume lists the development and SEO certificates; the About page shows every one. */
  protected readonly certificates = certificates.filter((cert) => cert.category !== 'Marketing');
  protected readonly totalCertificates = certificates.length;
  /** Worked out once per visit from today's date, so expiry labels never go stale. */
  protected readonly statuses = new Map(certificates.map((cert) => [cert.id, certificateStatus(cert)]));

  protected readonly activeProject = signal<Project | null>(null);
}
