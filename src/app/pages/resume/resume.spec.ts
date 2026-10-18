import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { certificates, education } from '../../data/credentials';
import { experience } from '../../data/experience';
import { projects } from '../../data/projects';
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

  it('reads experience, project roles, education, and certificates from the shared data', () => {
    const text = el.textContent ?? '';
    for (const job of experience) expect(text).toContain(job.organization);
    for (const project of projects) expect(text).toContain(project.caseStudy.role);
    for (const item of education) expect(text).toContain(item.degree);
    expect(el.querySelectorAll('#qualifications li.bg-surface').length).toBe(certificates.length);
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

  it('opens the case study for a project role', async () => {
    el.querySelectorAll<HTMLButtonElement>('#experience button[aria-haspopup="dialog"]')[1].click();
    await fixture.whenStable();

    expect(el.querySelector('#case-study-title')?.textContent).toContain(projects[1].title);
  });
});
