import { Component, ElementRef, OnDestroy, OnInit, inject, input, signal } from '@angular/core';

const DURATION_MS = 1200;

/**
 * A stat like "8" or "3+" that counts up from zero the first time it scrolls
 * into view. Screen readers get the final value straight away; the moving
 * digits are hidden from them. Shown as-is under prefers-reduced-motion, or
 * when the value doesn't start with a number.
 *
 *   <dd class="tabular-nums"><app-count-up [value]="stat.value" /></dd>
 */
@Component({
  selector: 'app-count-up',
  template: `<span aria-hidden="true">{{ shown() }}</span><span class="sr-only">{{ value() }}</span>`,
})
export class CountUpComponent implements OnInit, OnDestroy {
  readonly value = input.required<string>();

  protected readonly shown = signal('');
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;
  private frame = 0;

  ngOnInit(): void {
    const match = /^(\d+)(.*)$/.exec(this.value());
    const reduceMotion = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? true;
    if (!match || reduceMotion || typeof IntersectionObserver === 'undefined') {
      this.shown.set(this.value());
      return;
    }

    const [, digits, suffix] = match;
    const target = Number(digits);
    this.shown.set(`0${suffix}`);
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        this.observer?.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / DURATION_MS);
          const eased = 1 - (1 - progress) ** 3;
          this.shown.set(`${Math.round(target * eased)}${suffix}`);
          if (progress < 1) this.frame = requestAnimationFrame(tick);
        };
        this.frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    cancelAnimationFrame(this.frame);
  }
}
