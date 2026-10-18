import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { certificates } from '../../data/credentials';
import { AboutComponent } from './about';

describe('AboutComponent', () => {
  let fixture: ComponentFixture<AboutComponent>;
  let el: HTMLElement;
  const cards = () => el.querySelectorAll('#certifications li.tile');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('lists every certificate by default', () => {
    expect(cards().length).toBe(certificates.length);
  });

  it('filters certificates by category and marks the active filter', async () => {
    const development = [...el.querySelectorAll<HTMLButtonElement>('.filter-chip')].find((button) =>
      button.textContent?.includes('Development'),
    )!;
    development.click();
    await fixture.whenStable();

    expect(cards().length).toBe(certificates.filter((cert) => cert.category === 'Development').length);
    expect(development.getAttribute('aria-pressed')).toBe('true');
  });

  it('opens the full-size viewer for the certificate that was clicked', async () => {
    el.querySelector<HTMLButtonElement>('#certifications li.tile button')!.click();
    await fixture.whenStable();

    expect(el.querySelector('#certificate-title')?.textContent).toContain(certificates[0].title);
  });
});
