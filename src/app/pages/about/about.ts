import { Component, signal, computed } from '@angular/core';
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

  // Certificates Data
  protected readonly certificates = [
    {
      id: 'responsive',
      title: 'Legacy Responsive Web Design',
      image: 'assets/uploads/responsive.png',
      category: 'Development',
      provider: 'freeCodeCamp',
      description: 'Demonstrates foundational knowledge of HTML, CSS, and responsive design principles.',
      color: 'blue',
      spotlight: 'rgba(59,130,246,0.06)'
    },
    {
      id: 'legacy-js',
      title: 'Legacy JavaScript Algorithms and Data Structures',
      image: 'assets/uploads/legacy.png',
      category: 'Development',
      provider: 'freeCodeCamp',
      description: 'Demonstrates proficiency in core JavaScript fundamentals, data structures, and problem-solving.',
      color: 'yellow',
      spotlight: 'rgba(234,179,8,0.06)'
    },
    {
      id: 'backend',
      title: 'Back End Development and APIs',
      image: 'assets/uploads/back.png',
      category: 'Development',
      provider: 'freeCodeCamp',
      description: 'Demonstrates proficiency in back end development and building APIs.',
      color: 'indigo',
      spotlight: 'rgba(99,102,241,0.06)'
    },
    {
      id: 'seo',
      title: 'SEO Certified',
      image: 'assets/uploads/seo.png',
      category: 'SEO',
      provider: 'HubSpot',
      description: 'Knowledgeable about SEO and capable of optimizing a website for search engines.',
      color: 'emerald',
      spotlight: 'rgba(16,185,129,0.06)'
    },
    {
      id: 'seo2',
      title: 'HubSpot SEO II Certified',
      image: 'assets/uploads/seo2.png',
      category: 'SEO',
      provider: 'HubSpot',
      description: 'Capable of implementing advanced SEO tactics on a website for enhanced search visibility.',
      color: 'cyan',
      spotlight: 'rgba(6,182,212,0.06)'
    },
    {
      id: 'content-marketing',
      title: 'Content Marketing Certified',
      image: 'assets/uploads/contentmarketing.png',
      category: 'Marketing',
      provider: 'HubSpot',
      description: 'Capable and skilled in long-term content planning, creation, promotion, and analysis.',
      color: 'orange',
      spotlight: 'rgba(249,115,22,0.06)'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Certified',
      image: 'assets/uploads/digitalmarket.png',
      category: 'Marketing',
      provider: 'HubSpot',
      description: 'Skilled in applying digital marketing with an inbound mindset and social media strategy.',
      color: 'purple',
      spotlight: 'rgba(168,85,247,0.06)'
    },
    {
      id: 'digital-ad',
      title: 'Digital Advertising Certified',
      image: 'assets/uploads/digitalad.png',
      category: 'Marketing',
      provider: 'HubSpot',
      description: 'Tested on content and best practices, demonstrating a solid understanding of digital advertising.',
      color: 'red',
      spotlight: 'rgba(239,68,68,0.06)'
    }
  ];

  protected readonly filterCategory = signal<'All' | 'Development' | 'Marketing' | 'SEO'>('All');

  protected readonly filteredCertificates = computed(() => {
    const category = this.filterCategory();
    if (category === 'All') return this.certificates;
    return this.certificates.filter(c => c.category === category);
  });

  protected setFilter(category: 'All' | 'Development' | 'Marketing' | 'SEO') {
    this.filterCategory.set(category);
    this.certificationsTransform.set(Array(8).fill('perspective(1000px) rotateX(0deg) rotateY(0deg)'));
    this.certificationsSpotlight.set(Array(8).fill({x: 0, y: 0}));
  }

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
    const certId = this.selectedCertificate();
    if (!certId) return '';
    const cert = this.certificates.find(c => c.id === certId);
    return cert ? cert.title : 'Certificate';
  }

  protected getCertificateImage(): string {
    const certId = this.selectedCertificate();
    if (!certId) return '';
    const cert = this.certificates.find(c => c.id === certId);
    return cert ? cert.image : '';
  }
}