import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';       // Was home.component
import { AboutComponent } from './pages/about/about';     // Was about.component
import { ProjectsComponent } from './pages/projects/projects';
import { ResumeComponent } from './pages/resume/resume';
import { ContactComponent } from './pages/contact/contact'; // Assuming you created this

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];