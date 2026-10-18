import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { featuredProjects, projects } from '../../data/projects';
import { HomeComponent } from './home';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('renders the headline', () => {
    expect(el.querySelector('h1')?.textContent).toContain('Building digital experiences');
  });

  it('renders one card per featured project', () => {
    expect(el.querySelectorAll('app-project-card').length).toBe(featuredProjects.length);
  });

  it('opens the case study for the project that was clicked', async () => {
    el.querySelectorAll<HTMLButtonElement>('app-project-card button')[1].click();
    await fixture.whenStable();

    expect(el.querySelector('#case-study-title')?.textContent).toContain(featuredProjects[1].title);
  });

  it('links the archive tile to every project, with a marquee visitors can pause', async () => {
    const link = el.querySelector<HTMLAnchorElement>('.archive a[href="/projects"]');
    expect(link?.textContent).toContain(`Explore all ${projects.length} projects`);
    // Two copies make the loop seamless; both are decorative and hidden from screen readers.
    expect(el.querySelectorAll('.marquee li').length).toBe(projects.length * 2);
    expect(el.querySelector('.marquee')?.getAttribute('aria-hidden')).toBe('true');

    const pause = el.querySelector<HTMLButtonElement>('.archive button[aria-pressed]')!;
    pause.click();
    await fixture.whenStable();

    expect(pause.getAttribute('aria-pressed')).toBe('true');
    expect(el.querySelector('.marquee')?.classList).toContain('is-paused');
  });
});
