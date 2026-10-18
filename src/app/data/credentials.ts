/**
 * Education and certifications for the About page. The homepage's
 * "Certifications" stat counts this list too, so it can't drift.
 *
 * Adding a certificate: export the image as WebP into src/assets/certificates/
 * (`<id>.webp` about 1200px wide, plus `<id>-640.webp` for the grid) and add
 * an entry. If it expires, set `validUntil`: the "Valid until / Expired" label
 * is worked out from today's date, so it never goes stale.
 */

export type CertificateCategory = 'Development' | 'SEO' | 'Marketing';

export interface Certificate {
  id: string;
  title: string;
  provider: 'freeCodeCamp' | 'HubSpot Academy';
  category: CertificateCategory;
  description: string;
  /** Date earned, yyyy-mm-dd. */
  issued: string;
  /** Last valid day, yyyy-mm-dd, for certificates that expire. */
  validUntil?: string;
  /** Public page where anyone can confirm the certificate is real. */
  verifyUrl?: string;
  image: { src: string; small: string; width: number; height: number; alt: string };
}

export const certificateCategories: CertificateCategory[] = ['Development', 'SEO', 'Marketing'];

export const certificates: Certificate[] = [
  {
    id: 'responsive',
    title: 'Legacy Responsive Web Design',
    provider: 'freeCodeCamp',
    category: 'Development',
    description: 'Demonstrates foundational knowledge of HTML, CSS, and responsive design principles.',
    issued: '2024-09-08',
    verifyUrl: 'https://freecodecamp.org/certification/camusmarkdave/responsive-web-design',
    image: {
      src: 'assets/certificates/responsive.webp',
      small: 'assets/certificates/responsive-640.webp',
      width: 1018,
      height: 686,
      alt: 'freeCodeCamp certificate: Legacy Responsive Web Design V8, awarded to Mark Dave S. Camus on September 8, 2024.',
    },
  },
  {
    id: 'legacy-js',
    title: 'Legacy JavaScript Algorithms and Data Structures',
    provider: 'freeCodeCamp',
    category: 'Development',
    description: 'Demonstrates proficiency in core JavaScript fundamentals, data structures, and problem-solving.',
    issued: '2025-09-24',
    verifyUrl: 'https://freecodecamp.org/certification/camusmarkdave/javascript-algorithms-and-data-structures',
    image: {
      src: 'assets/certificates/legacy-js.webp',
      small: 'assets/certificates/legacy-js-640.webp',
      width: 1152,
      height: 770,
      alt: 'freeCodeCamp certificate: Legacy JavaScript Algorithms and Data Structures, awarded to Mark Dave S. Camus on September 24, 2025.',
    },
  },
  {
    id: 'backend',
    title: 'Back End Development and APIs',
    provider: 'freeCodeCamp',
    category: 'Development',
    description: 'Demonstrates proficiency in back end development and building APIs.',
    issued: '2025-09-26',
    verifyUrl: 'https://freecodecamp.org/certification/camusmarkdave/back-end-development-and-apis',
    image: {
      src: 'assets/certificates/backend.webp',
      small: 'assets/certificates/backend-640.webp',
      width: 1045,
      height: 693,
      alt: 'freeCodeCamp certificate: Back End Development and APIs, awarded to Mark Dave S. Camus on September 26, 2025.',
    },
  },
  {
    id: 'seo',
    title: 'SEO Certified',
    provider: 'HubSpot Academy',
    category: 'SEO',
    description: 'Knowledgeable about SEO and capable of optimizing a website to perform well in search engines.',
    issued: '2026-01-11',
    validUntil: '2027-02-10',
    image: {
      src: 'assets/certificates/seo.webp',
      small: 'assets/certificates/seo-640.webp',
      width: 1140,
      height: 880,
      alt: 'HubSpot Academy certificate: SEO Certified, Mark Dave Camus, valid January 11, 2026 to February 10, 2027.',
    },
  },
  {
    id: 'seo2',
    title: 'HubSpot SEO II Certified',
    provider: 'HubSpot Academy',
    category: 'SEO',
    description: 'Capable of implementing advanced SEO tactics on a website for stronger search visibility.',
    issued: '2026-02-05',
    validUntil: '2028-03-06',
    image: {
      src: 'assets/certificates/seo2.webp',
      small: 'assets/certificates/seo2-640.webp',
      width: 1140,
      height: 880,
      alt: 'HubSpot Academy certificate: HubSpot SEO II Certified, Mark Dave Camus, valid February 5, 2026 to March 6, 2028.',
    },
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing Certified',
    provider: 'HubSpot Academy',
    category: 'Marketing',
    description: 'Skilled in long-term content planning, creation, promotion, and analysis.',
    issued: '2025-08-26',
    validUntil: '2027-09-25',
    image: {
      src: 'assets/certificates/content-marketing.webp',
      small: 'assets/certificates/content-marketing-640.webp',
      width: 1140,
      height: 880,
      alt: 'HubSpot Academy certificate: Content Marketing Certified, Mark Dave Camus, valid August 26, 2025 to September 25, 2027.',
    },
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Certified',
    provider: 'HubSpot Academy',
    category: 'Marketing',
    description: 'Skilled in applying digital marketing with an inbound mindset and social media strategy.',
    issued: '2025-07-27',
    validUntil: '2026-08-26',
    image: {
      src: 'assets/certificates/digital-marketing.webp',
      small: 'assets/certificates/digital-marketing-640.webp',
      width: 1140,
      height: 880,
      alt: 'HubSpot Academy certificate: Digital Marketing Certified, Mark Dave Camus, valid July 27, 2025 to August 26, 2026.',
    },
  },
  {
    id: 'digital-ad',
    title: 'Digital Advertising Certified',
    provider: 'HubSpot Academy',
    category: 'Marketing',
    description: 'Tested on content and best practices, with a solid understanding of digital advertising.',
    issued: '2025-09-28',
    validUntil: '2026-10-28',
    image: {
      src: 'assets/certificates/digital-ad.webp',
      small: 'assets/certificates/digital-ad-640.webp',
      width: 1140,
      height: 880,
      alt: 'HubSpot Academy certificate: Digital Advertising Certified, Mark Dave Camus, valid September 28, 2025 to October 28, 2026.',
    },
  },
];

export interface CertificateStatus {
  kind: 'earned' | 'valid' | 'expiring' | 'expired';
  label: string;
}

const EXPIRING_SOON_DAYS = 60;
const monthYear = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });
const fullDate = new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' });

/** yyyy-mm-dd as a local date (new Date('yyyy-mm-dd') would be UTC and can shift a day). */
function localDate(iso: string): Date {
  const [year, month, day] = iso.split('-').map(Number);
  return new Date(year, month - 1, day);
}

/** "Earned Sep 2024", "Valid until Feb 2027", "Expires Oct 28, 2026", or "Expired Aug 2026". */
export function certificateStatus(cert: Certificate, today = new Date()): CertificateStatus {
  if (!cert.validUntil) return { kind: 'earned', label: `Earned ${monthYear.format(localDate(cert.issued))}` };

  const end = localDate(cert.validUntil);
  const daysLeft = (end.getTime() - today.getTime()) / 86_400_000;
  if (daysLeft < 0) return { kind: 'expired', label: `Expired ${monthYear.format(end)}` };
  if (daysLeft <= EXPIRING_SOON_DAYS) return { kind: 'expiring', label: `Expires ${fullDate.format(end)}` };
  return { kind: 'valid', label: `Valid until ${monthYear.format(end)}` };
}

export interface Education {
  degree: string;
  school: string;
  /** Shown as the date badge. */
  period: string;
  description: string;
  achievements: string[];
  /** Courses worth naming on the Resume page. */
  coursework?: string[];
  current?: boolean;
}

export const education: Education[] = [
  {
    degree: 'BS Information Technology',
    school: 'Holy Angel University',
    period: 'Expected 2027',
    description:
      'Major in Web Development, building strong fundamentals in software engineering, database management, and user interface design.',
    achievements: ["Consistent Dean's Lister, 1st to 3rd year", 'Working student since 1st year', 'Active member of CodeGeeks'],
    coursework: ['Web Systems and Technologies', 'Mobile Programming', 'Object-Oriented Programming'],
    current: true,
  },
  {
    degree: 'Senior High School, STEM strand',
    school: 'Don Bosco Academy',
    period: '2021 – 2023',
    description:
      'Completed the Science, Technology, Engineering, and Mathematics strand with a focus on computer science electives.',
    achievements: ['Graduated with honors'],
  },
];
