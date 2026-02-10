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
  protected readonly featuredSpotlight = signal({x: 0, y: 0});

  // Project Grid Transforms (6 items)
  protected readonly projectTransforms = signal<string[]>(Array(6).fill('rotateX(0deg) rotateY(0deg)'));
  protected readonly projectSpotlights = signal<{x: number, y: number}[]>(Array(6).fill({x: 0, y: 0}));

  // Design Experiments Transforms (4 items)
  protected readonly experimentTransforms = signal<string[]>(Array(4).fill('rotateX(0deg) rotateY(0deg)'));

  protected onFeaturedMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    this.featuredSpotlight.set({x, y});

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
    newSpotlights[index] = {x, y};
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