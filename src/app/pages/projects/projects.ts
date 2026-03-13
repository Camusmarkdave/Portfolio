import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  // Featured Project Transform
  protected readonly featuredProjectTransform = signal('rotateX(0deg) rotateY(0deg)');
  protected readonly featuredSpotlight = signal({ x: 0, y: 0 });

  // Project Grid Transforms (4 items)
  protected readonly projectTransforms = signal<string[]>(Array(4).fill('rotateX(0deg) rotateY(0deg)'));
  protected readonly projectSpotlights = signal<{ x: number, y: number }[]>(Array(4).fill({ x: 0, y: 0 }));

  // Design Experiments Transforms (4 items)
  protected readonly experimentTransforms = signal<string[]>(Array(4).fill('rotateX(0deg) rotateY(0deg)'));

  // Mouse position for background animations
  protected readonly mousePosition = signal({ x: 0, y: 0 });

  // Data Models
  protected readonly featuredProject = {
    title: 'Danonos Donut',
    description: 'A delightful e-commerce experience for a donut shop, featuring a vibrant product showcase and seamless ordering process.',
    role: 'Frontend Developer.',
    roleDescription: 'Integrated frontend templates with the PHP/MySQL backend. Dynamically rendered database-driven content for menus, blogs, and locations directly into the DOM.',
    image: 'assets/uploads/danonos.png',
    tags: ['PHP', 'MySQL (XAMPP)', 'HTML/CSS'],
    liveLink: 'https://Danonos.com',
    githubLink: 'https://github.com/gabewebd/WSEA.git'
  };

  protected readonly projects = [
    {
      title: 'Wellness Apparel',
      description: 'An online webshop dedicated to wellness and activewear, focusing on a clean user interface and shopping experience.',
      role: 'Full Stack Developer.',
      roleDescription: 'Developed the user interface and integrated the PHP/MySQL backend for product management and shopping functionality.',
      image: 'assets/uploads/wellness.png',
      tags: ['PHP', 'MySQL (XAMPP)'],
      category: 'E-Commerce',
      githubLink: 'https://github.com/gabewebd/the-wellness-apparel.git',
      liveLink: 'http://the-wellness-apparel.onlinewebshop.net/'
    },
    {
      title: 'Ecoquest',
      description: 'An interactive platform focused on ecological education and quests to promote environmental awareness.',
      role: 'UI/UX Designer & Frontend Lead.',
      roleDescription: 'Designed the complete UI in Figma from scratch and created a gamified experience to drive user engagement.',
      image: 'assets/uploads/ecoquest.png',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      category: 'Web App',
      githubLink: 'https://github.com/Josh-Aguiluz/6WCSERVER-Final-Project.git',
      liveLink: 'https://hauecoquest.vercel.app/'
    },
    {
      title: 'The Four Who Adore',
      description: 'A stylish web project showcasing fashion, lifestyle, and brand aesthetics.',
      role: 'Frontend Lead & Material UI Specialist.',
      roleDescription: 'Translated wireframes into functional code with consistent styling across all pages, utilizing Git for team version control.',
      image: 'assets/uploads/chanel.png',
      tags: ['Angular', 'Tailwind CSS', 'TypeScript'],
      category: 'Fashion',
      githubLink: 'https://github.com/gabewebd/6AWEB-TheFourWhoAdore.git',
      liveLink: 'https://prelim-project-thefourwhoadore.netlify.app/home'
    },
    {
      title: 'Sagada Tours',
      description: 'A premium tourism landing page for Sagada, featuring a sophisticated dark and gold aesthetic with elegant scroll animations.',
      role: 'Frontend Developer.',
      roleDescription: 'Developed the interactive landing page with tailored Tailwind CSS configurations, responsive design, and smooth scroll animations.',
      image: 'assets/uploads/sagada.png',
      tags: ['Angular', 'Tailwind CSS'],
      category: 'Web App',
      githubLink: 'https://github.com/Camusmarkdave/Sagada.git',
      liveLink: 'https://sagada-qg55.vercel.app/'
    },
    /*
    {
      title: 'Ongoing Project',
      description: 'An exciting new project currently in the development phase. Check back soon for updates.',
      role: 'Full Stack Developer.',
      roleDescription: 'Architecting the core systems and designing the initial user interface mockups.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
      tags: ['Coming Soon'],
      category: 'In Development',
      githubLink: 'https://github.com/Camusmarkdave',
      liveLink: '#'
    },
    {
      title: 'Ongoing Project',
      description: 'Another innovative project in the early stages of planning and design.',
      role: 'Software Engineer.',
      roleDescription: 'Researching technical requirements and setting up the development environment.',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop',
      tags: ['Coming Soon'],
      category: 'In Development',
      githubLink: 'https://github.com/Camusmarkdave',
      liveLink: '#'
    }
    */
  ];

  // Role Toggle State
  protected readonly featuredProjectOpen = signal(false);
  protected readonly projectOpenStates = signal<boolean[]>(Array(this.projects.length).fill(false));

  protected toggleFeatured() {
    this.featuredProjectOpen.update(v => !v);
  }

  protected toggleProject(index: number) {
    this.projectOpenStates.update(states => {
      const newStates = [...states];
      newStates[index] = !newStates[index];
      return newStates;
    });
  }

  protected readonly experiments = [
    { title: 'Menu Interactions', subtitle: 'Dynamic filtering & cart animations', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
    { title: 'State Management', subtitle: 'RxJS powered shopping cart', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop' },
    { title: 'Gamified UI', subtitle: 'Progress tracking & reward systems', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop' },
    { title: 'Editorial Layouts', subtitle: 'CSS Grid & responsive typography', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop' }
  ];

  protected onSectionMouseMove(event: MouseEvent) {
    this.mousePosition.set({ x: event.clientX, y: event.clientY });
  }

  protected onFeaturedMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    this.featuredSpotlight.set({ x, y });

    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    this.featuredProjectTransform.set(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`);
  }

  protected resetFeaturedTilt() {
    this.featuredProjectTransform.set('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  }

  protected onProjectMouseMove(event: MouseEvent, index: number) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const newSpotlights = [...this.projectSpotlights()];
    newSpotlights[index] = { x, y };
    this.projectSpotlights.set(newSpotlights);

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    const newTransforms = [...this.projectTransforms()];
    newTransforms[index] = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    this.projectTransforms.set(newTransforms);
  }

  protected resetProjectTilt(index: number) {
    const newTransforms = [...this.projectTransforms()];
    newTransforms[index] = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    this.projectTransforms.set(newTransforms);
  }

  protected onExperimentMouseMove(event: MouseEvent, index: number) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    const newTransforms = [...this.experimentTransforms()];
    newTransforms[index] = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    this.experimentTransforms.set(newTransforms);
  }

  protected resetExperimentTilt(index: number) {
    const newTransforms = [...this.experimentTransforms()];
    newTransforms[index] = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    this.experimentTransforms.set(newTransforms);
  }
}