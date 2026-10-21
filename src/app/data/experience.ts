/**
 * Work experience, newest first, matching the resume PDF. The Resume page
 * lists it, and the homepage's "Kind words" quote comes from the
 * recommendation here, so the two can't disagree.
 *
 * Real details only: `highlights` is what I actually did there (leave it
 * empty rather than guess), and a recommendation is quoted word for word.
 */

export interface Recommendation {
  /** A verbatim excerpt; mark any cut with "…". */
  quote: string;
  name: string;
  title: string;
}

export interface Experience {
  role: string;
  organization: string;
  /** The department or office within the organization. */
  unit?: string;
  location: string;
  /** Shown as the date badge. */
  period: string;
  /** One line of context above the highlights. */
  summary?: string;
  /** What I did there, one item per line. */
  highlights: string[];
  award?: { title: string; reason: string };
  recommendation?: Recommendation;
}

export const experience: Experience[] = [
  {
    role: 'IT Department Intern',
    organization: 'Clark Development Corporation',
    unit: 'Information Technology Department',
    location: 'Clark Freeport Zone, Pampanga',
    period: 'Jun – Oct 2026',
    summary: '486 hours of on-the-job training.',
    highlights: [
      'Built the complete tracker page of an OJT Tracker web system for the Human Resource Department using PHP and SQL, giving HR easier access to intern records that were previously reviewed manually.',
      'Configured networks, routers, and access points using Ruijie and TP-Link devices and Ignite; managed PoE switches, crimped UTP cables, and assisted with server management.',
      'Supported the installation and configuration of access points and routers for the new JBL Clark hospital.',
      'Handled technical support and troubleshooting requests from employees across CDC departments, prioritizing and dividing a high request volume with fellow interns.',
    ],
    award: {
      title: 'Best Intern Award',
      reason: 'For cooperation, dedication, and commitment to assigned responsibilities.',
    },
    recommendation: {
      quote:
        'You were always game to take on a challenge, and you showed that you do not need to be constantly told what to do in order to contribute. For me, that is one of the qualities that separates someone who is simply completing an OJT requirement from someone who has real potential in the workplace.',
      name: 'Nicole André De Guzman',
      title: 'Technical Services Officer II',
    },
  },
  {
    role: 'Student Assistant',
    organization: 'Holy Angel University',
    unit: 'University Library',
    location: 'Angeles City, Pampanga',
    period: 'Aug 2023 – May 2026',
    highlights: [
      'Balanced full-time academic coursework with 24 hours of weekly administrative and departmental duties.',
      'Managed library inventory and administrative systems to maintain accurate records and ensure the efficient organization of resources.',
    ],
  },
];
