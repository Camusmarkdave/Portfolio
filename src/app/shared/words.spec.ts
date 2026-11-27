import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { WordsComponent } from './words';

@Component({
  imports: [WordsComponent],
  template: `<app-words text="Always game to help." />`,
})
class HostComponent {}

describe('WordsComponent', () => {
  it('gives screen readers the plain sentence and hides the per-word spans from them', async () => {
    const fixture = TestBed.createComponent(HostComponent);
    await fixture.whenStable();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('.sr-only')?.textContent).toBe('Always game to help.');

    const words = [...el.querySelectorAll<HTMLElement>('[aria-hidden="true"] .word')];
    expect(words.map((word) => word.textContent)).toEqual(['Always ', 'game ', 'to ', 'help.']);
    expect(words.map((word) => word.style.getPropertyValue('--i'))).toEqual(['0', '1', '2', '3']);
  });
});
