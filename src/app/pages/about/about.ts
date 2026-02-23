import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  // Hero Section Transforms
  protected readonly heroTextTransform = signal('rotateX(0deg) rotateY(0deg)');
  protected readonly heroImageTransform = signal('rotateX(0deg) rotateY(0deg)');

  // Philosophy Cards Transforms
  protected readonly philosophyTransforms = signal<string[]>([
    'rotateX(0deg) rotateY(0deg)',
    'rotateX(0deg) rotateY(0deg)',
    'rotateX(0deg) rotateY(0deg)'
  ]);

  // Philosophy Spotlights
  protected readonly philosophySpotlights = signal<{x: number, y: number}[]>([
    {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}
  ]);

  // Toolkit Transform
  protected readonly toolkitTransform = signal('rotateX(0deg) rotateY(0deg)');
  protected readonly toolkitSpotlight = signal<{x: number, y: number}>({x: 0, y: 0});

  protected onHeroMouseMove(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Text tilts slightly
    const textRotateX = ((y - centerY) / centerY) * -2;
    const textRotateY = ((x - centerX) / centerX) * 2;
    this.heroTextTransform.set(`perspective(1000px) rotateX(${textRotateX}deg) rotateY(${textRotateY}deg)`);

    // Image tilts more for parallax
    const imgRotateX = ((y - centerY) / centerY) * -5;
    const imgRotateY = ((x - centerX) / centerX) * 5;
    this.heroImageTransform.set(`perspective(1000px) rotateX(${imgRotateX}deg) rotateY(${imgRotateY}deg)`);
  }

  protected resetHeroTilt() {
    this.heroTextTransform.set('perspective(1000px) rotateX(0deg) rotateY(0deg)');
    this.heroImageTransform.set('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  }

  protected onPhilosophyCardMouseMove(event: MouseEvent, index: number) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    const newTransforms = [...this.philosophyTransforms()];
    newTransforms[index] = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    this.philosophyTransforms.set(newTransforms);

    const newSpotlights = [...this.philosophySpotlights()];
    newSpotlights[index] = {x, y};
    this.philosophySpotlights.set(newSpotlights);
  }

  protected resetPhilosophyCardTilt(index: number) {
    const newTransforms = [...this.philosophyTransforms()];
    newTransforms[index] = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    this.philosophyTransforms.set(newTransforms);
  }

  protected onToolkitMouseMove(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;

    this.toolkitTransform.set(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    this.toolkitSpotlight.set({x, y});
  }

  protected resetToolkitTilt() {
    this.toolkitTransform.set('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  }

  // Certifications Card Transform
  protected readonly certificationsTransform = signal<string[]>([
    'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  ]);
  protected readonly certificationsSpotlight = signal<{x: number, y: number}[]>([
    {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}
  ]);

  protected onCertificationsMouseMove(event: MouseEvent, index: number) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    const newTransforms = [...this.certificationsTransform()];
    newTransforms[index] = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    this.certificationsTransform.set(newTransforms);

    const newSpotlights = [...this.certificationsSpotlight()];
    newSpotlights[index] = {x, y};
    this.certificationsSpotlight.set(newSpotlights);
  }

  protected resetCertificationsTilt(index: number) {
    const newTransforms = [...this.certificationsTransform()];
    newTransforms[index] = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    this.certificationsTransform.set(newTransforms);
  }

  // Profile Modal State
  protected readonly isProfileModalOpen = signal(false);

  protected openProfileModal(event: Event) {
    event.preventDefault();
    this.isProfileModalOpen.set(true);
  }

  protected closeProfileModal() {
    this.isProfileModalOpen.set(false);
  }

  // Certificate Modal State
  protected readonly selectedCertificate = signal<string | null>(null);

  protected openCertificateModal(certId: string, event: Event) {
    event.stopPropagation();
    this.selectedCertificate.set(certId);
  }

  protected closeCertificateModal() {
    this.selectedCertificate.set(null);
  }

  // Background 3D Shapes
  protected readonly shapesTransform = signal<string[]>([
    'rotateX(20deg) rotateY(20deg)',
    'rotateX(-20deg) rotateY(-20deg)',
    'rotateX(20deg) rotateY(-20deg)',
    'rotateX(-20deg) rotateY(20deg)'
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
      `rotateX(${-20 - rotateX}deg) rotateY(${-20 - rotateY}deg)`,
      `rotateX(${20 + rotateX}deg) rotateY(${-20 - rotateY}deg)`,
      `rotateX(${-20 - rotateX}deg) rotateY(${20 + rotateY}deg)`
    ]);
  }
}