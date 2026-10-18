/**
 * About-page-only content. Shared facts (stats, skills, education,
 * certificates) live in src/app/data/ because other pages show them too.
 */

import { IconName } from '../../shared/icon';

export interface Principle {
  icon: IconName;
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    icon: 'layout',
    title: 'Visual Developer',
    body: 'I speak both languages: Figma and TypeScript. I make sure the final code matches the design intent, bridging the gap between design and engineering.',
  },
  {
    icon: 'code',
    title: 'Logic Driven',
    body: "I don't just copy-paste tutorials. I break complex requirements into clean, reusable logic, so the code stays maintainable as it grows.",
  },
  {
    icon: 'clock',
    title: 'Deadline Focused',
    body: 'I balance clean code with practical delivery: ship a working MVP first, then iterate on real feedback instead of chasing perfection.',
  },
];

export interface DesignToken {
  label: string;
  value: string;
  /** The Tailwind class that carries the decision in code. */
  className: string;
  sample: 'navy' | 'accent' | 'radius' | 'type';
}

/**
 * Proof for "Visual Developer": real decisions from this site's design system
 * (src/styles.css + tailwind.config.js) and the classes that implement them.
 * Update these if the tokens change.
 */
export const designTokens: DesignToken[] = [
  { sample: 'navy', label: 'Brand navy', value: '#0F172A', className: 'bg-navy' },
  { sample: 'accent', label: 'Accent, light / dark theme', value: '#0F766E / #22D3EE', className: 'text-accent' },
  { sample: 'radius', label: 'Tile corners', value: '24px', className: 'rounded-3xl' },
  { sample: 'type', label: 'Display headline', value: 'Geist, weight 800', className: 'text-display' },
];
