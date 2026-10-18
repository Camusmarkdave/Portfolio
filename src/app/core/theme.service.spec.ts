import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('toggles the theme, applies it to <html>, and remembers the choice', () => {
    const theme = TestBed.inject(ThemeService);
    const next = theme.theme() === 'dark' ? 'light' : 'dark';

    theme.toggle();
    TestBed.tick();

    expect(theme.theme()).toBe(next);
    expect(document.documentElement.getAttribute('data-theme')).toBe(next);
    expect(localStorage.getItem('theme')).toBe(next);
  });

  it('lets a page pin its theme, which hides the toggle there', () => {
    const theme = TestBed.inject(ThemeService);

    theme.forced.set('dark');

    expect(theme.theme()).toBe('dark');
    expect(theme.canToggle()).toBe(false);
  });
});
