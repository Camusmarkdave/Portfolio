/**
 * Work experience. The Resume page lists it, and the homepage's "Kind words"
 * quote comes from the recommendation here, so the two can't disagree.
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
  /** Shown as the date badge. */
  period: string;
  /** What I did there, one item per line. */
  highlights: string[];
  recommendation?: Recommendation;
}

export const experience: Experience[] = [
  {
    role: 'On-the-Job Trainee',
    organization: 'Clark Development Corporation',
    period: 'Jul – Oct 2026',
    highlights: [],
    recommendation: {
      quote:
        'You were always game to take on a challenge, and you showed that you do not need to be constantly told what to do in order to contribute. For me, that is one of the qualities that separates someone who is simply completing an OJT requirement from someone who has real potential in the workplace.',
      name: 'Nicole André De Guzman',
      title: 'Technical Services Officer II',
    },
  },
];
