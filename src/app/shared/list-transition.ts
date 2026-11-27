import { DOCUMENT } from '@angular/common';
import { ApplicationRef, inject } from '@angular/core';

/**
 * Animates a list between two states with the View Transitions API: items
 * that stay glide to their new places, and items that leave or arrive
 * scale-fade (styles.css, "Filtering a list"). Where the API is missing, or
 * the visitor prefers reduced motion, the change simply happens.
 *
 * The list needs class="vt-list", and each item a unique --vt-name:
 *
 *   <ul #list class="vt-list">
 *     <li [style.--vt-name]="'cert-' + cert.id">…</li>
 *
 *   private readonly transition = injectListTransition();
 *   pick(option: Filter, list: HTMLElement) {
 *     this.transition(list, () => this.filter.set(option));
 *   }
 */
export function injectListTransition(): (list: HTMLElement, update: () => void) => void {
  const doc = inject(DOCUMENT);
  const app = inject(ApplicationRef);
  let latest: ViewTransition | undefined;

  return (list, update) => {
    const reduceMotion = doc.defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof doc.startViewTransition !== 'function') {
      update();
      return;
    }

    // The names exist only while filtering, so page-to-page transitions stay as they are.
    list.classList.add('is-filtering');
    doc.documentElement.classList.add('vt-filter');

    const transition = doc.startViewTransition(() => {
      update();
      app.tick(); // render the new list now, so the browser can capture it
      // New items arrive through this transition, not the scroll reveal.
      for (const item of list.querySelectorAll('.reveal:not(.is-revealed)')) {
        item.classList.add('is-revealed', 'reveal-skip');
      }
    });
    latest = transition;

    // A second click skips the first transition; only the newest one cleans up.
    const cleanUp = () => {
      if (latest !== transition) return;
      list.classList.remove('is-filtering');
      doc.documentElement.classList.remove('vt-filter');
    };
    transition.finished.then(cleanUp, cleanUp);
  };
}
