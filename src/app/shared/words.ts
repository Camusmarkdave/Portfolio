import { Component, computed, input } from '@angular/core';

/**
 * A sentence whose words brighten one after another when its `.quote`
 * container is revealed (styles.css). Screen readers get the plain sentence;
 * the per-word spans are hidden from them, so nothing is read word by word.
 *
 *   <figure class="quote" appReveal>
 *     <blockquote>“<app-words [text]="quote" />”</blockquote>
 *   </figure>
 */
@Component({
  selector: 'app-words',
  // Kept on one line: stray whitespace between the spans would show up as extra spaces.
  template: `<span class="sr-only">{{ text() }}</span><span aria-hidden="true">@for (word of words(); track $index) {<span class="word" [style.--i]="$index">{{ word }}</span>}</span>`,
})
export class WordsComponent {
  readonly text = input.required<string>();

  /** Each word keeps its trailing space, so the spans wrap exactly like plain text. */
  protected readonly words = computed(() => this.text().split(/(?<=\s)/));
}
