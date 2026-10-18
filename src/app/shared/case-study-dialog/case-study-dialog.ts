import { Component, input, output } from '@angular/core';
import { Project, coverSrcset } from '../../data/projects';
import { IconComponent } from '../icon';
import { ModalDirective } from '../modal.directive';

/**
 * Short case study (problem, role, stack, outcome) in a native modal <dialog>.
 * Pass a project to open it, null to close it.
 */
@Component({
  selector: 'app-case-study-dialog',
  imports: [IconComponent, ModalDirective],
  templateUrl: './case-study-dialog.html',
})
export class CaseStudyDialogComponent {
  readonly project = input<Project | null>(null);
  readonly closed = output<void>();

  protected readonly srcset = coverSrcset;
}
