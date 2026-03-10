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
  protected readonly cardTransforms = signal<string[]>(
    Array(5).fill('perspective(1000px) rotateX(0deg) rotateY(0deg)')
  );

  // Spotlights for the 5 cards
  protected readonly cardSpotlights = signal<{x: number, y: number}[]>(
    Array.from({ length: 5 }, () => ({ x: 0, y: 0 }))
  );

  protected onCardMouseMove(event: MouseEvent, index: number) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -2; // Subtle tilt
    const rotateY = ((x - centerX) / centerX) * 2;

    this.cardTransforms.update(transforms => {
      const newTransforms = [...transforms];
      newTransforms[index] = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
      return newTransforms;
    });

    this.cardSpotlights.update(spotlights => {
      const newSpotlights = [...spotlights];
      newSpotlights[index] = {x, y};
      return newSpotlights;
    });
  }

  protected resetCardTilt(index: number) {
    this.cardTransforms.update(transforms => {
      const newTransforms = [...transforms];
      newTransforms[index] = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      return newTransforms;
    });
  }
}