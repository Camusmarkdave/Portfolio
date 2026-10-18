import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { certificateStatus, certificates, education } from '../../data/credentials';
import { experience } from '../../data/experience';
import { developer, resumePdf } from '../../data/profile';
import { Project, projects } from '../../data/projects';
import { skills } from '../../data/skills';
import { CaseStudyDialogComponent } from '../../shared/case-study-dialog/case-study-dialog';
import { IconComponent } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-resume',
  imports: [RouterLink, IconComponent, RevealDirective, CaseStudyDialogComponent],
  templateUrl: './resume.html',
})
export class ResumeComponent {
  protected readonly developer = developer;
  protected readonly current = education.find((item) => item.current);
  protected readonly pdf = resumePdf;

  protected readonly experience = experience;
  protected readonly projects = projects;
  protected readonly education = education;
  protected readonly skills = skills;
  protected readonly certificates = certificates;
  /** Worked out once per visit from today's date, so expiry labels never go stale. */
  protected readonly statuses = new Map(certificates.map((cert) => [cert.id, certificateStatus(cert)]));

  protected readonly activeProject = signal<Project | null>(null);
}
