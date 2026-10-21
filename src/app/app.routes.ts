import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

/**
 * The home page loads eagerly; every other page is code-split, so first-time
 * visitors only download what they're looking at.
 *
 * Every page supports both themes. `data.theme` can still pin a page to one
 * palette (and hides the theme toggle there) if a new page needs time to move
 * onto the shared design tokens in styles.css; delete it once the page does.
 *
 * `data.description` sets that page's meta description; without one, the
 * site-wide description from index.html is used.
 */
export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Mark Dave Camus | Web Developer & UI Engineer' },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.AboutComponent),
    title: 'About | Mark Dave Camus',
    data: {
      description:
        'About Mark Dave Camus: approach, IT education at Holy Angel University, verified certifications, and the everyday toolkit.',
    },
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.ProjectsComponent),
    title: 'Projects | Mark Dave Camus',
    data: {
      description:
        'Every project by Mark Dave Camus, with live sites, source code, and short case studies: the problem, his role, the stack, and the outcome.',
    },
  },
  {
    path: 'resume',
    loadComponent: () => import('./pages/resume/resume').then((m) => m.ResumeComponent),
    title: 'Resume | Mark Dave Camus',
    data: {
      description:
        'Resume of Mark Dave Camus: Best Intern Award as an IT intern at Clark Development Corporation, academic projects, a BS IT at Holy Angel University, skills, and certifications.',
    },
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.ContactComponent),
    title: 'Contact | Mark Dave Camus',
    data: {
      description:
        'Contact Mark Dave Camus about a project, a role, or an idea: send a message, email, call, or connect on LinkedIn and GitHub.',
    },
  },
  { path: '**', redirectTo: '' },
];
