import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  // Typing Effect State
  protected readonly typedText = signal('');
  private readonly phrases = ['experiences', 'interfaces', 'products', 'solutions'];
  private currentPhraseIndex = 0;
  private isDeleting = false;
  private typingSpeed = 100;
  private deletingSpeed = 50;
  private pauseTime = 2000;
  private timeoutId: any;

  // 3D Tilt State
  protected readonly heroImageTransform = signal('rotateX(0deg) rotateY(0deg)');

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  private type() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    const currentLength = this.typedText().length;

    if (this.isDeleting) {
      this.typedText.set(currentPhrase.substring(0, currentLength - 1));
    } else {
      this.typedText.set(currentPhrase.substring(0, currentLength + 1));
    }

    let typeSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.typedText() === currentPhrase) {
      typeSpeed = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.typedText() === '') {
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      typeSpeed = 500;
    }

    this.timeoutId = setTimeout(() => this.type(), typeSpeed);
  }

  protected onMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (max 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -10; 
    const rotateY = ((x - centerX) / centerX) * 10;

    this.heroImageTransform.set(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  }

  protected resetTilt() {
    this.heroImageTransform.set('rotateX(0deg) rotateY(0deg) scale(1)');
  }

  // Project Tilt State
  protected readonly projectTransforms = signal<string[]>(['rotateX(0deg) rotateY(0deg)', 'rotateX(0deg) rotateY(0deg)']);

  // Selected Works Spotlight State
  protected readonly selectedWorkSpotlights = signal<{x: number, y: number}[]>([
    {x: 0, y: 0}, {x: 0, y: 0}
  ]);

  // Service Spotlight State
  protected readonly serviceSpotlights = signal<{x: number, y: number}[]>([
    {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}
  ]);

  // Service Header Tilt State
  protected readonly serviceHeaderTransform = signal('rotateX(0deg) rotateY(0deg)');

  protected onServiceHeaderMouseMove(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (max 5 degrees)
    const rotateX = ((y - centerY) / centerY) * -5; 
    const rotateY = ((x - centerX) / centerX) * 5;

    this.serviceHeaderTransform.set(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  }

  protected resetServiceHeader() {
    this.serviceHeaderTransform.set('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  }

  protected onProjectMouseMove(event: MouseEvent, index: number) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (max 5 degrees for subtler effect on projects)
    const rotateX = ((y - centerY) / centerY) * -5; 
    const rotateY = ((x - centerX) / centerX) * 5;

    const newTransforms = [...this.projectTransforms()];
    newTransforms[index] = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    this.projectTransforms.set(newTransforms);

    const newSpotlights = [...this.selectedWorkSpotlights()];
    newSpotlights[index] = {x, y};
    this.selectedWorkSpotlights.set(newSpotlights);
  }

  protected resetProjectTilt(index: number) {
    const newTransforms = [...this.projectTransforms()];
    newTransforms[index] = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    this.projectTransforms.set(newTransforms);
  }

  protected onServiceMouseMove(event: MouseEvent, index: number) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newSpotlights = [...this.serviceSpotlights()];
    newSpotlights[index] = {x, y};
    this.serviceSpotlights.set(newSpotlights);
  }

  // Services Section Background 3D Shapes
  protected readonly shapesTransform = signal<string[]>([
    'rotateX(20deg) rotateY(20deg)',
    'rotateX(-20deg) rotateY(-20deg)',
    'rotateX(20deg) rotateY(-20deg)',
    'rotateX(-20deg) rotateY(20deg)'
  ]);

  protected onServicesSectionMouseMove(event: MouseEvent) {
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
      `rotateX(${20 + rotateX}deg) rotateY(${-20 + rotateY}deg)`,
      `rotateX(${-20 - rotateX}deg) rotateY(${20 - rotateY}deg)`
    ]);
  }
}