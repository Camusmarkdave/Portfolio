import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  // Form Tilt State
  protected readonly formTransform = signal('rotateX(0deg) rotateY(0deg)');

  // Cards Tilt State (5 cards)
  protected readonly cardTransforms = signal<string[]>([
    'rotateX(0deg) rotateY(0deg)',
    'rotateX(0deg) rotateY(0deg)',
    'rotateX(0deg) rotateY(0deg)',
    'rotateX(0deg) rotateY(0deg)',
    'rotateX(0deg) rotateY(0deg)'
  ]);

  protected onFormMouseMove(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max 2 degrees for form)
    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;

    this.formTransform.set(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  }

  protected resetFormTilt() {
    this.formTransform.set('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  }

  protected onCardMouseMove(event: MouseEvent, index: number) {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max 5 degrees for cards)
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    const newTransforms = [...this.cardTransforms()];
    newTransforms[index] = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    this.cardTransforms.set(newTransforms);
  }

  protected resetCardTilt(index: number) {
    const newTransforms = [...this.cardTransforms()];
    newTransforms[index] = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    this.cardTransforms.set(newTransforms);
  }

  // Background 3D Shapes
  protected readonly shapesTransform = signal<string[]>([
    'rotateX(20deg) rotateY(20deg)',
    'rotateX(-20deg) rotateY(-20deg)'
  ]);

  protected onSectionMouseMove(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 45; 
    const rotateY = ((x - centerX) / centerX) * 45;

    this.shapesTransform.set([
      `rotateX(${20 + rotateX}deg) rotateY(${20 + rotateY}deg)`,
      `rotateX(${-20 - rotateX}deg) rotateY(${-20 - rotateY}deg)`
    ]);
  }
}