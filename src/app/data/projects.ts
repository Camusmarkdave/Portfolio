/**
 * Every project, with its case study. The homepage shows the `featured` ones
 * (the first featured project gets the large tile); the project count and the
 * case-study dialog read from here too.
 *
 * Adding a project:
 *  1. Export a cover screenshot as WebP, about 1280px wide (~30–70 KB), into
 *     src/assets/work/, plus an optional 640px copy for phones (`small`).
 *     No screenshot yet? Leave `cover` out and the card falls back to a
 *     gradient in the project's accent color.
 *  2. Add an entry below. `slug` must be unique; it becomes the
 *     shareable case-study link (/#case-<slug>).
 */

export type Accent = 'cyan' | 'emerald' | 'violet' | 'amber' | 'rose';

export interface CaseStudy {
  problem: string;
  role: string;
  /** What I personally did, one item per line. */
  contributions: string[];
  stack: string[];
  outcome: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  /** Short tech / role tags shown on the card. */
  tags: string[];
  summary: string;
  /** When it shipped, as on the resume, e.g. "Feb 2026". */
  date?: string;
  /** `src` is the ~1280px original; `small` (optional) is a 640px copy phones download instead. */
  cover?: { src: string; small?: string; width: number; height: number; alt: string };
  /** Decorative glow + placeholder color. Never used for text. */
  accent: Accent;
  links: { live?: string; repo?: string };
  featured?: boolean;
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  {
    slug: 'danonos-donut',
    title: "Danono's Donuts",
    category: 'Web Design',
    tags: ['Front-end', 'Branding'],
    date: 'Feb 2026',
    summary: 'A business showcase site for a local donut shop, with the menu, blog, and store locations in one place.',
    cover: {
      src: 'assets/work/danonos-donut.webp',
      small: 'assets/work/danonos-donut-640.webp',
      width: 1280,
      height: 490,
      alt: 'Danono’s Donuts homepage: a “More Choices, More Value” headline beside assorted donuts on a cooling rack.',
    },
    accent: 'amber',
    links: { live: 'https://danonos.com', repo: 'https://github.com/gabewebd/WSEA' },
    featured: true,
    caseStudy: {
      problem:
        'The shop needed one home online for its menu, blog posts, and store locations, and that content had to change without anyone editing HTML by hand.',
      role: 'Frontend Developer',
      contributions: [
        'Integrated the front-end templates with the PHP/MySQL back end.',
        'Rendered menus, blog posts, and locations from the database straight into the page.',
      ],
      stack: ['PHP', 'MySQL (XAMPP)', 'HTML', 'CSS'],
      outcome:
        'Live at danonos.com. Updating the menu, a blog post, or a location is a data change, not a code change.',
    },
  },
  {
    slug: 'wellness-apparel',
    title: 'Wellness Apparel',
    category: 'E-Commerce',
    tags: ['PHP', 'MySQL'],
    summary: 'An online shop for wellness and activewear, built around a calm, uncluttered shopping experience.',
    cover: {
      src: 'assets/work/wellness-apparel.webp',
      small: 'assets/work/wellness-apparel-640.webp',
      width: 1280,
      height: 651,
      alt: 'The Wellness Apparel storefront: an “Elevate Your Comfort” headline and a Shop Our Collection button beside a model in a shearling jacket.',
    },
    accent: 'emerald',
    links: {
      live: 'http://the-wellness-apparel.onlinewebshop.net/',
      repo: 'https://github.com/gabewebd/the-wellness-apparel',
    },
    featured: true,
    caseStudy: {
      problem:
        'A wellness and activewear brand needed a storefront that was easy to browse, plus a back end to manage its product catalog.',
      role: 'Full-Stack Developer',
      contributions: [
        'Developed the storefront UI, keeping the shopping experience clean and focused.',
        'Integrated the PHP/MySQL back end for product management and shopping features.',
      ],
      stack: ['PHP', 'MySQL (XAMPP)', 'HTML', 'CSS'],
      outcome:
        'A working storefront with database-backed product management and shopping features, deployed as a live demo.',
    },
  },
  {
    slug: 'the-four-who-adore',
    title: 'The Four Who Adore',
    category: 'Fashion & Lifestyle',
    tags: ['Design', 'Front-end'],
    date: 'Dec 2025',
    summary: 'A fashion and lifestyle group profile site, built by a team of four.',
    cover: {
      src: 'assets/work/the-four-who-adore.webp',
      small: 'assets/work/the-four-who-adore-640.webp',
      width: 1280,
      height: 528,
      alt: 'The Four Who Adore fashion page: a black-and-white Chanel “2025 Collection” hero with a model seated on a riverside wall at night.',
    },
    accent: 'violet',
    links: {
      live: 'https://prelim-project-thefourwhoadore.netlify.app/home',
      repo: 'https://github.com/gabewebd/6AWEB-TheFourWhoAdore',
    },
    featured: true,
    caseStudy: {
      problem:
        'Four people were building one site. Every page had to look and behave like the same brand, no matter who wrote it.',
      role: 'Frontend Lead & Material UI Specialist',
      contributions: [
        'Translated the wireframes into working Angular pages.',
        'Kept styling consistent across every page of the site.',
        'Managed team contributions and resolved merge conflicts with Git and GitHub.',
      ],
      stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'Git & GitHub'],
      outcome: "Shipped on Netlify as one consistent site, with the whole team's work merged through Git.",
    },
  },
  {
    slug: 'ecoquest',
    title: 'Eco Quest',
    category: 'Web App',
    tags: ['UI/UX', 'MERN'],
    date: 'Oct 2025',
    summary: 'A gamified web app that turns environmental education into quests.',
    cover: {
      src: 'assets/work/ecoquest.webp',
      small: 'assets/work/ecoquest-640.webp',
      width: 1280,
      height: 531,
      alt: 'Eco Quest landing page: an “Imagine a place…” headline with Start Your Quest and Learn More buttons beside an illustration of two hikers with a map and compass.',
    },
    accent: 'emerald',
    links: {
      live: 'https://hauecoquest.vercel.app/',
      repo: 'https://github.com/Josh-Aguiluz/6WCSERVER-Final-Project',
    },
    caseStudy: {
      problem: 'Make ecological education engaging enough that students keep coming back to it.',
      role: 'UI/UX Designer & Frontend Lead',
      contributions: [
        'Designed the complete gamified interface and interactive prototypes in Figma.',
        'Led frontend development of the quest-based environmental learning app.',
      ],
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Figma'],
      outcome: 'A live MERN web app with a quest-based learning flow, designed end to end in Figma.',
    },
  },
  {
    slug: 'sagada-tours',
    title: 'Sagada Tours',
    category: 'Web App',
    tags: ['Angular', 'Tailwind CSS'],
    summary: 'A premium tourism landing page for Sagada, with a dark-and-gold look and elegant scroll animations.',
    cover: {
      src: 'assets/work/sagada-tours.webp',
      small: 'assets/work/sagada-tours-640.webp',
      width: 1280,
      height: 615,
      alt: 'Sagada Tours landing page: a large “Sagada Tours” title and a gold Book Now button over a dark photo of a waterfall.',
    },
    accent: 'amber',
    links: { live: 'https://sagada-qg55.vercel.app/', repo: 'https://github.com/Camusmarkdave/Sagada' },
    caseStudy: {
      problem: 'Present Sagada as a premium destination, on a page that feels as polished as the trip.',
      role: 'Frontend Developer',
      contributions: [
        'Built the interactive landing page on a tailored Tailwind CSS configuration.',
        'Made it fully responsive, with smooth scroll animations.',
      ],
      stack: ['Angular', 'Tailwind CSS'],
      outcome: 'Live on Vercel: a responsive, animated landing page with one consistent dark-and-gold theme.',
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

/** srcset for a cover, when it has a 640px copy (null otherwise, so the attribute is dropped). */
export function coverSrcset(cover: NonNullable<Project['cover']>): string | null {
  return cover.small ? `${cover.small} 640w, ${cover.src} ${cover.width}w` : null;
}
