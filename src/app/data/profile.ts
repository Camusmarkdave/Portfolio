/**
 * Who I am and how to reach me. The hero, header, footer, and the code card
 * on the homepage all read from this file, so details change in one place.
 */

import { certificates } from './credentials';
import { projects } from './projects';

/**
 * Printed as-is in the homepage's code card, so keep it a flat object of
 * strings, string arrays, and booleans (that's all the card knows how to print).
 * `available` switches every "Available for projects" badge on the site.
 */
export const developer = {
  name: 'Mark Dave Camus',
  role: 'Web Developer & UI Engineer',
  stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'Figma'],
  email: 'camusmarkdave@gmail.com',
  available: true,
};

/** Opens a Gmail draft addressed to me in a new tab. */
export const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${developer.email}`;

export type SocialIcon = 'linkedin' | 'github' | 'mail';

export const socials: { label: string; href: string; icon: SocialIcon }[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mark-dave-camus-81a5193a4/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/Camusmarkdave', icon: 'github' },
  { label: 'Email', href: emailHref, icon: 'mail' },
];

/** My resume as a PDF, offered on the Resume and Contact pages. */
export const resumePdf = {
  href: 'assets/uploads/Resume.pdf',
  /** The name the download saves under. */
  fileName: 'Mark-Dave-Camus-Resume.pdf',
  /** Shown on the download buttons. Update it whenever you replace the file. */
  size: '2.2 MB',
};

/**
 * Inputs for the stats strip (homepage and About). Real numbers only: update
 * them when they change, never round up.
 */
export const milestones = {
  /** When I started building for the web (the start of my BSIT, Aug 2023). */
  buildingSince: new Date(2023, 7, 1),
  /** Consistent Dean's Lister, 1st to 3rd year. */
  deansListYears: 3,
};

export interface Stat {
  value: string;
  label: string;
}

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;
const yearsBuilding = Math.floor((Date.now() - milestones.buildingSince.getTime()) / MS_PER_YEAR);

/** Counted from the real data wherever possible, so no page can overstate them. */
export const stats: Stat[] = [
  { value: `${projects.filter((project) => project.links.live).length}`, label: 'Live projects' },
  { value: `${certificates.length}`, label: 'Certifications earned' },
  { value: `${yearsBuilding}+`, label: 'Years building for the web' },
  { value: `${milestones.deansListYears}`, label: "Years on the Dean's List" },
];
