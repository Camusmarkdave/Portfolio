/** Site-wide settings: where the site lives, navigation, and the measured scores. */

export const site = {
  url: 'https://markdavecamus.vercel.app',
  repo: 'https://github.com/Camusmarkdave/Portfolio',
};

export interface NavItem {
  label: string;
  path: string;
  /** Match the path exactly (needed for "/", which prefixes every route). */
  exact?: boolean;
}

export const primaryNav: NavItem[] = [
  { label: 'Home', path: '/', exact: true },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Resume', path: '/resume' },
];

export const footerNav: NavItem[] = [...primaryNav, { label: 'Contact', path: '/contact' }];

/** Set `href` once a page exists; until then these render as plain text, not dead links. */
export const legalLinks: { label: string; href?: string }[] = [
  { label: 'Privacy Policy' },
  { label: 'Terms of Service' },
];

export interface LighthouseScore {
  label: string;
  short: string;
  score: number;
}

/**
 * Real Lighthouse 13.5 scores (mobile emulation, simulated throttling), not
 * claims: the median of five runs against this redesign's production build
 * (`ng build`) on Oct 17, 2026, before it was deployed. After deploying, and
 * after any big change, re-measure the live site and paste the new numbers:
 *   npx lighthouse https://markdavecamus.vercel.app --view
 * The hero links visitors to PageSpeed Insights so they can check it themselves.
 */
export const lighthouse = {
  measuredOn: '2026-10-17',
  formFactor: 'Mobile',
  scores: [
    { label: 'Performance', short: 'Perf', score: 98 },
    { label: 'Accessibility', short: 'A11y', score: 100 },
    { label: 'Best Practices', short: 'Best', score: 100 },
    { label: 'SEO', short: 'SEO', score: 100 },
  ] satisfies LighthouseScore[],
};

/** Runs a fresh PageSpeed Insights (Lighthouse) report on the live site. */
export const pageSpeedUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(`${site.url}/`)}`;
