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

  // Certifications Card Transforms & Spotlights (for 8 cards)
  protected readonly certificationsTransform = signal<string[]>(Array(8).fill('perspective(1000px) rotateX(0deg) rotateY(0deg)'));
  protected readonly certificationsSpotlight = signal<{x: number, y: number}[]>(Array(8).fill({x: 0, y: 0}));

  // Profile Modal State
  protected readonly isProfileModalOpen = signal(false);

  // Certificate Modal State
  protected readonly selectedCertificate = signal<string | null>(null);

  // Background 3D Shapes
  protected readonly shapesTransform = signal<string[]>([
    'rotateX(20deg) rotateY(20deg)',
    'rotateX(-20deg) rotateY(-20deg)',
    'rotateX(20deg) rotateY(-20deg)',
    'rotateX(-20deg) rotateY(20deg)'
  ]);

  // --- Event Handlers ---

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
    this.handleCardTilt(event, index, this.philosophyTransforms, this.philosophySpotlights);
  }

  protected resetPhilosophyCardTilt(index: number) {
    this.resetCardTilt(index, this.philosophyTransforms);
  }

  protected onCertificationsMouseMove(event: MouseEvent, index: number) {
    this.handleCardTilt(event, index, this.certificationsTransform, this.certificationsSpotlight);
  }

  protected resetCertificationsTilt(index: number) {
    this.resetCardTilt(index, this.certificationsTransform);
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

  // --- Modal Handlers ---

  protected openProfileModal(event: Event) {
    event.preventDefault();
    this.isProfileModalOpen.set(true);
  }

  protected closeProfileModal() {
    this.isProfileModalOpen.set(false);
  }

  protected openCertificateModal(certId: string, event: Event) {
    event.stopPropagation();
    this.selectedCertificate.set(certId);
  }

  protected closeCertificateModal() {
    this.selectedCertificate.set(null);
  }

  // --- Helpers ---

  private handleCardTilt(event: MouseEvent, index: number, transformsSignal: any, spotlightsSignal: any) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    const newTransforms = [...transformsSignal()];
    newTransforms[index] = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    transformsSignal.set(newTransforms);

    const newSpotlights = [...spotlightsSignal()];
    newSpotlights[index] = {x, y};
    spotlightsSignal.set(newSpotlights);
  }

  private resetCardTilt(index: number, transformsSignal: any) {
    const newTransforms = [...transformsSignal()];
    newTransforms[index] = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    transformsSignal.set(newTransforms);
  }

  protected getCertificateTitle(): string {
    const cert = this.selectedCertificate();
    if (!cert) return '';
    const map: Record<string, string> = {
      'backend': 'Back End Development and APIs',
      'content-marketing': 'Content Marketing Certified',
      'digital-ad': 'Digital Advertising Certified',
      'digital-marketing': 'Digital Marketing Certified',
      'legacy-js': 'Legacy JavaScript Algorithms and Data Structures',
      'responsive': 'Legacy Responsive Web Design',
      'seo': 'SEO Certified',
      'seo2': 'HubSpot SEO II Certified'
    };
    return map[cert] || 'Certificate';
  }

  protected getCertificateImage(): string {
    const cert = this.selectedCertificate();
    if (!cert) return '';
    const map: Record<string, string> = {
      'backend': 'assets/uploads/back.png',
      'content-marketing': 'assets/uploads/contentmarketing.png',
      'digital-ad': 'assets/uploads/digitalad.png',
      'digital-marketing': 'assets/uploads/digitalmarket.png',
      'legacy-js': 'assets/uploads/legacy.png',
      'responsive': 'assets/uploads/responsive.png',
      'seo': 'assets/uploads/seo.png',
      'seo2': 'assets/uploads/seo2.png'
    };
    return map[cert] || '';
  }
}