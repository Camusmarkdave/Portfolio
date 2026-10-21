/**
 * Homepage-only content. Site-wide facts (stats, skills, projects) live in
 * src/app/data/ because the About page shows them too.
 */

import { experience } from '../../data/experience';
import { IconName } from '../../shared/icon';

export interface Service {
  icon: IconName;
  title: string;
  body: string;
  tags: string[];
}

export const services: Service[] = [
  {
    icon: 'code',
    title: 'Frontend Dev',
    body: 'Responsive single-page apps in Angular and React, on clean, semantic, SEO-friendly markup that works with a keyboard and a screen reader, not just a mouse.',
    tags: ['Angular', 'React', 'TypeScript'],
  },
  {
    icon: 'pen',
    title: 'UI/UX Design',
    body: 'Interfaces designed in Figma first, with deliberate typography, spacing, and color, so every screen is decided before it gets coded.',
    tags: ['Figma', 'Wireframing', 'Prototyping'],
  },
  {
    icon: 'bolt',
    title: 'Optimization',
    body: 'Fast by default: lazy loading, lean bundles, and efficient state, measured against Core Web Vitals instead of guessed.',
    tags: ['Performance', 'SEO', 'Core Web Vitals'],
  },
];

/** Specific, checkable facts about this page, shown as evidence on the Optimization tile. */
export const performanceNotes: string[] = [
  'Code-split routes: this page loads without the other pages.',
  'Responsive WebP covers: about 18 KB on phones, 45 KB on desktop, lazy-loaded.',
  'Self-hosted variable fonts, 52 KB total, zero third-party requests.',
  'Every animation respects your “reduce motion” setting.',
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /**
   * Sample entries preview the layout in `ng serve` only. They are filtered
   * out of production builds, so a fake quote can never ship.
   */
  sample?: boolean;
}

export const testimonials: Testimonial[] = [
  // Real recommendations come from data/experience.ts, so the Resume quotes them identically.
  ...experience.flatMap(({ organization, recommendation }) =>
    recommendation
      ? [{ quote: recommendation.quote, name: recommendation.name, role: `${recommendation.title}, ${organization}` }]
      : [],
  ),
  {
    sample: true,
    quote:
      'A second voice from a client or instructor helps. Ask them how you communicate, handle feedback, and deliver.',
    name: 'Client name',
    role: "Owner · Danono's Donuts",
  },
];
