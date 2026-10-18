/** @type {import('tailwindcss').Config} */

// Semantic colors point at the CSS variables in src/styles.css, so one class
// (e.g. `bg-surface`) follows the active theme — light, dark, or a navy band —
// without any `dark:` variants. Opacity modifiers still work: `bg-surface/80`.
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  // `dark:` follows the theme toggle (data-theme on <html>), not the OS setting.
  // Prefer the semantic colors below: `dark:` can't see `.band-navy` sections.
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        canvas: token('canvas'), // page background
        surface: token('surface'), // tiles / cards
        raised: token('raised'), // hover + pressed fills
        line: token('line'), // hairline borders
        ink: token('ink'), // headings + body text
        muted: token('muted'), // secondary text (AA on canvas and surface)
        accent: {
          DEFAULT: token('accent'), // text-safe brand cyan
          fill: token('accent-fill'), // solid accent backgrounds
          on: token('on-accent'), // text on accent-fill
        },
        navy: { DEFAULT: '#0f172a', deep: '#070c1a' },
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Fluid display sizes: the bold headline is the brand's anchor.
        display: ['clamp(2.75rem, 1.5rem + 5vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.045em' }],
        h2: ['clamp(2rem, 1.45rem + 2.2vw, 3.25rem)', { lineHeight: '1.04', letterSpacing: '-0.035em' }],
      },
      maxWidth: {
        page: '76rem',
      },
    },
  },
  plugins: [],
};
