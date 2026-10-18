import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { projects } from '../../data/projects';
import { ProjectsComponent } from './projects';

describe('ProjectsComponent', () => {
  let fixture: ComponentFixture<ProjectsComponent>;
  let el: HTMLElement;
  const rows = () => el.querySelectorAll('#all-projects article');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('renders one row per project, with its role, links, and whole screenshot', () => {
    expect(rows().length).toBe(projects.length);

    const [project] = projects;
    const first = rows()[0];
    expect(first.textContent).toContain(project.caseStudy.role);
    expect(first.querySelector(`a[href="${project.links.live}"]`)).toBeTruthy();
    expect(first.querySelector(`a[href="${project.links.repo}"]`)).toBeTruthy();

    const img = first.querySelector('img')!;
    expect(img.getAttribute('width')).toBe(String(project.cover!.width));
    expect(img.className).not.toMatch(/object-cover|aspect-/);
  });

  it('filters projects by category and marks the active filter', async () => {
    const category = projects[projects.length - 1].category;
    const chip = [...el.querySelectorAll<HTMLButtonElement>('.filter-chip')].find((button) =>
      button.textContent?.includes(category),
    )!;
    chip.click();
    await fixture.whenStable();

    expect(rows().length).toBe(projects.filter((project) => project.category === category).length);
    expect(chip.getAttribute('aria-pressed')).toBe('true');
  });

  it('opens the case study for the project that was clicked', async () => {
    rows()[2].querySelector<HTMLButtonElement>('button[aria-haspopup="dialog"]')!.click();
    await fixture.whenStable();

    expect(el.querySelector('#case-study-title')?.textContent).toContain(projects[2].title);
  });
});
