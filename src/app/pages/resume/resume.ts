import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class ResumeComponent {
  // Transforms for the 5 cards on the resume page
  protected readonly cardTransforms = signal<string[]>([
    'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  ]);

  // Spotlights for the 5 cards
  protected readonly cardSpotlights = signal<{x: number, y: number}[]>([
    {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}
  ]);

  protected onCardMouseMove(event: MouseEvent, index: number) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -2; // Subtle tilt
    const rotateY = ((x - centerX) / centerX) * 2;

    const newTransforms = [...this.cardTransforms()];
    newTransforms[index] = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
    this.cardTransforms.set(newTransforms);

    const newSpotlights = [...this.cardSpotlights()];
    newSpotlights[index] = {x, y};
    this.cardSpotlights.set(newSpotlights);
  }

  protected resetCardTilt(index: number) {
    const newTransforms = [...this.cardTransforms()];
    newTransforms[index] = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    this.cardTransforms.set(newTransforms);
  }
}