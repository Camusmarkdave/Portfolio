import { Component, computed, input, output } from '@angular/core';
import { Project, coverSrcset } from '../../data/projects';
import { IconComponent } from '../icon';

/**
 * Bento tile for one project. The whole card opens its case study (a single
 * "stretched" button, so it's one tab stop); the Live link sits above it.
 * `size="lg"` adds the summary. The screenshot is always shown whole.
 */
@Component({
  selector: 'app-project-card',
  imports: [IconComponent],
  templateUrl: './project-card.html',
  host: { class: 'block' },
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
  /** 1-based position, shown as "01", "02"… */
  readonly index = input(1);
  readonly size = input<'lg' | 'md'>('md');
  readonly readCase = output<void>();

  protected readonly large = computed(() => this.size() === 'lg');
  protected readonly number = computed(() => String(this.index()).padStart(2, '0'));
  protected readonly titleId = computed(() => `project-${this.project().slug}`);

  /** Rendered widths of the screenshot per breakpoint, so phones fetch the 640px copy. */
  protected readonly sizes = computed(() =>
    this.large()
      ? '(min-width: 1024px) 705px, calc(100vw - 5rem)'
      : '(min-width: 1024px) 315px, (min-width: 640px) calc(50vw - 4rem), calc(100vw - 5rem)',
  );
  protected readonly srcset = coverSrcset;
}
