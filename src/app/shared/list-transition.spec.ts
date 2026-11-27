import { TestBed } from '@angular/core/testing';
import { injectListTransition } from './list-transition';

describe('injectListTransition', () => {
  const list = () => {
    const el = document.createElement('ul');
    el.innerHTML = '<li class="reveal is-revealed"></li><li class="reveal"></li>';
    return el;
  };
  const transition = () => TestBed.runInInjectionContext(() => injectListTransition());

  afterEach(() => {
    delete (document as Partial<Document>).startViewTransition;
    document.documentElement.classList.remove('vt-filter');
  });

  it('just applies the change where view transitions are unavailable', () => {
    const el = list();
    let applied = false;
    transition()(el, () => (applied = true));

    expect(applied).toBe(true);
    expect(el.classList.contains('is-filtering')).toBe(false);
  });

  it('names the items only while the transition runs, and skips the scroll reveal for new ones', async () => {
    let finish!: () => void;
    const finished = new Promise<void>((resolve) => (finish = resolve));
    let duringUpdate = { list: false, root: false };
    document.startViewTransition = ((update: () => void) => {
      update();
      return { finished };
    }) as unknown as Document['startViewTransition'];

    const el = list();
    transition()(el, () => {
      duringUpdate = {
        list: el.classList.contains('is-filtering'),
        root: document.documentElement.classList.contains('vt-filter'),
      };
    });

    expect(duringUpdate).toEqual({ list: true, root: true });
    // The item that hadn't scrolled into view yet shows straight away, without its reveal animation.
    expect(el.children[1].classList.contains('is-revealed')).toBe(true);
    expect(el.children[1].classList.contains('reveal-skip')).toBe(true);
    expect(el.children[0].classList.contains('reveal-skip')).toBe(false);

    finish();
    await finished;
    await Promise.resolve();

    expect(el.classList.contains('is-filtering')).toBe(false);
    expect(document.documentElement.classList.contains('vt-filter')).toBe(false);
  });
});
