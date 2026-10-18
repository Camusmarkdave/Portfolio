import { Directive, ElementRef, OnDestroy, OnInit, inject, input, numberAttribute } from '@angular/core';

/**
 * Fades an element up the first time it scrolls into view. One-shot, and
 * skipped entirely under prefers-reduced-motion (see `.reveal` in styles.css).
 * Don't use it above the fold: hidden content delays Largest Contentful Paint.
 *
 *   <div appReveal>…</div>
 *   <div [appReveal]="120">…</div>   ← optional stagger delay in ms
 */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class RevealDirective implements OnInit, OnDestroy {
  readonly delay = input(0, { alias: 'appReveal', transform: (value: unknown) => numberAttribute(value, 0) });

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const node = this.el.nativeElement;
    if (this.delay()) node.style.setProperty('--reveal-delay', `${this.delay()}ms`);

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-revealed');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        node.classList.add('is-revealed');
        this.observer?.disconnect();
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
