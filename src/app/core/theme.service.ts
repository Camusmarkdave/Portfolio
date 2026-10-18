import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/**
 * Light/dark theme. The theme lives on <html data-theme="…"> and every color
 * token in styles.css keys off it. index.html applies the saved theme before
 * the first paint; this service takes over once the app boots.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly media = this.doc.defaultView?.matchMedia?.('(prefers-color-scheme: dark)');

  /** The visitor's explicit choice; null means "follow the OS setting". */
  private readonly choice = signal<Theme | null>(this.readStoredChoice());
  private readonly system = signal<Theme>(this.media?.matches ? 'dark' : 'light');

  /**
   * Set from route data (`data: { theme }`) for pages that haven't moved to
   * the shared design tokens yet. While set, the toggle is hidden.
   */
  readonly forced = signal<Theme | null>(null);

  /** What the visitor wants, ignoring any page that pins its own theme. */
  readonly preferred = computed(() => this.choice() ?? this.system());
  /** What's actually on screen. */
  readonly theme = computed(() => this.forced() ?? this.preferred());
  readonly canToggle = computed(() => this.forced() === null);

  constructor() {
    this.media?.addEventListener('change', (event) => this.system.set(event.matches ? 'dark' : 'light'));
    effect(() => this.doc.documentElement.setAttribute('data-theme', this.theme()));
  }

  toggle(): void {
    const next: Theme = this.preferred() === 'dark' ? 'light' : 'dark';
    this.choice.set(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be blocked (private mode); the choice still lasts this visit.
    }
  }

  private readStoredChoice(): Theme | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'light' || stored === 'dark' ? stored : null;
    } catch {
      return null;
    }
  }
}
