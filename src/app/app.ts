import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ActivatedRouteSnapshot,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  Router,
  RouterOutlet,
  RoutesRecognized,
} from '@angular/router';
import { Theme, ThemeService } from './core/theme.service';
import { SiteFooterComponent } from './layout/site-footer';
import { SiteHeaderComponent } from './layout/site-header';

/** App shell: skip link, header, routed page, footer. Page titles live in app.routes.ts. */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  private readonly doc = inject(DOCUMENT);

  constructor() {
    const router = inject(Router);
    const theme = inject(ThemeService);
    const meta = inject(Meta);
    const siteDescription = meta.getTag('name="description"')?.content ?? '';

    // Pages not yet rebuilt on the shared tokens pin their palette with route
    // data (see app.routes.ts). Read it as soon as the route is recognized so
    // the header and footer switch before the page paints.
    router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        theme.forced.set(pinnedTheme(event.state.root));
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        const page = deepest(router.routerState.snapshot.root);
        theme.forced.set(pinnedTheme(page));
        meta.updateTag({ name: 'description', content: (page.data['description'] as string | undefined) ?? siteDescription });
      }
    });

    this.trackSpotlight();
  }

  /**
   * Feeds the pointer position to the .tile and the .hero section it's over,
   * for the hover spotlights in styles.css. A plain DOM listener, so it never
   * triggers change detection; mouse and trackpad only.
   */
  private trackSpotlight(): void {
    if (!this.doc.defaultView?.matchMedia?.('(hover: hover) and (pointer: fine)').matches) return;
    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = event.target as Element | null;
        for (const lit of [target?.closest?.('.tile'), target?.closest?.('.hero')]) {
          if (!(lit instanceof HTMLElement)) continue;
          const box = lit.getBoundingClientRect();
          lit.style.setProperty('--spot-x', `${event.clientX - box.left}px`);
          lit.style.setProperty('--spot-y', `${event.clientY - box.top}px`);
        }
      });
    };
    this.doc.addEventListener('pointermove', onMove, { passive: true });
    inject(DestroyRef).onDestroy(() => this.doc.removeEventListener('pointermove', onMove));
  }

  /** Same-page jump that works on every route (a bare href="#main" would resolve against <base href="/">). */
  protected skipToContent(event: Event): void {
    event.preventDefault();
    const main = this.doc.getElementById('main');
    main?.focus();
    main?.scrollIntoView();
  }
}

function deepest(root: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
  let route = root;
  while (route.firstChild) route = route.firstChild;
  return route;
}

function pinnedTheme(route: ActivatedRouteSnapshot): Theme | null {
  return (deepest(route).data['theme'] as Theme | undefined) ?? null;
}
