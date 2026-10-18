/**
 * Projects-page-only content. The projects themselves live in
 * src/app/data/projects.ts because the homepage shows them too.
 */

import { IconName } from '../../shared/icon';

export interface ProcessStep {
  icon: IconName;
  title: string;
  body: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: 'search',
    title: 'Understand the problem',
    body: 'Who is it for, and what does it need to do? I pin that down before opening Figma. Every case study on this page starts with the answer.',
  },
  {
    icon: 'pen',
    title: 'Design before code',
    body: 'Layout, type, and color are settled in Figma first, so the build has an exact target to match instead of a rough idea.',
  },
  {
    icon: 'code',
    title: 'Build, ship, iterate',
    body: 'Responsive, accessible components, versioned in Git and shipped early, then improved on real feedback rather than polished forever.',
  },
];
