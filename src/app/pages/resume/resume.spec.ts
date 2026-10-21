import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { certificates, education } from '../../data/credentials';
import { experience } from '../../data/experience';
import { skills } from '../../data/skills';
import { ResumeComponent } from './resume';

describe('ResumeComponent', () => {
  let fixture: ComponentFixture<ResumeComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('offers the PDF as a download', () => {
    const link = el.querySelector<HTMLAnchorElement>('a[download]');
    expect(link?.getAttribute('href')).toBe('assets/uploads/Resume.pdf');
    expect(link?.textContent).toContain('Download PDF');
  });

  it('mirrors the PDF: every job with its highlights, the current degree, and the listed certificates', () => {
    const text = el.textContent ?? '';
    for (const job of experience) {
      expect(text).toContain(job.role);
      for (const item of job.highlights) expect(text).toContain(item);
    }
    expect(text).toContain('Best Intern Award');
    for (const item of education) {
      if (item.current) expect(text).toContain(item.degree);
      else expect(text).not.toContain(item.degree);
    }
    expect(el.querySelectorAll('.cert-list > li').length).toBe(
      certificates.filter((cert) => cert.category !== 'Marketing').length,
    );
    for (const skill of skills.networking) expect(text).toContain(skill);
  });

  it('lists the academic projects from the PDF, in its order', () => {
    const titles = [...el.querySelectorAll('#experience ol h4')].map((h) => h.textContent?.trim());
    expect(titles).toEqual(["Danono's Donuts", 'The Four Who Adore', 'Eco Quest']);
  });

  it('quotes the recommendation word for word', () => {
    const quote = experience.find((job) => job.recommendation)!.recommendation!;
    expect(el.querySelector('blockquote')?.textContent).toContain(quote.quote);
    expect(el.querySelector('figcaption')?.textContent).toContain(quote.name);
  });

  it('lists skills without self-scored percentages', () => {
    expect(el.querySelector('#qualifications')?.textContent).not.toMatch(/\d+\s*%/);
    expect(el.querySelector('[role="progressbar"]')).toBeNull();
  });

  it('opens the case study for a project', async () => {
    el.querySelectorAll<HTMLButtonElement>('#experience button[aria-haspopup="dialog"]')[2].click();
    await fixture.whenStable();

    expect(el.querySelector('#case-study-title')?.textContent).toContain('Eco Quest');
  });
});
