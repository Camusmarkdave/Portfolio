import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationStart, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from '../core/theme.service';
import { primaryNav } from '../data/site';
import { IconComponent } from '../shared/icon';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './site-header.html',
  host: { '(document:keydown.escape)': 'closeMenu(true)' },
})
export class SiteHeaderComponent {
  protected readonly theme = inject(ThemeService);
  protected readonly nav = primaryNav;
  protected readonly menuOpen = signal(false);

  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  constructor() {
    inject(Router)
      .events.pipe(
        filter((event) => event instanceof NavigationStart),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.menuOpen.set(false));
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  /** Escape closes the menu and hands focus back to the button that opened it. */
  protected closeMenu(restoreFocus = false): void {
    if (!this.menuOpen()) return;
    this.menuOpen.set(false);
    if (restoreFocus) this.menuButton()?.nativeElement.focus();
  }
}
