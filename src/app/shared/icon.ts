import { Component, input } from '@angular/core';

export type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'arrow-down'
  | 'check'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'code'
  | 'pen'
  | 'bolt'
  | 'layout'
  | 'clock'
  | 'cap'
  | 'expand'
  | 'verified'
  | 'mail'
  | 'github'
  | 'linkedin'
  | 'search'
  | 'briefcase'
  | 'download'
  | 'phone'
  | 'map-pin'
  | 'alert'
  | 'pause'
  | 'play'
  | 'award';

/**
 * Inline SVG icons (24×24 grid, 1.75px stroke). Always decorative: give the
 * surrounding button or link its own text. Size it with a class, e.g. `size-5`.
 */
@Component({
  selector: 'app-icon',
  // data-name lets CSS pick out an icon, e.g. to nudge arrows on hover (styles.css).
  host: { class: 'inline-block shrink-0', 'aria-hidden': 'true', '[attr.data-name]': 'name()' },
  template: `
    <svg
      class="block size-full"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      focusable="false"
    >
      @switch (name()) {
        @case ('arrow-right') {
          <path d="M5 12h14M13 6l6 6-6 6" />
        }
        @case ('arrow-up-right') {
          <path d="M7 17 17 7M8 7h9v9" />
        }
        @case ('arrow-down') {
          <path d="M12 5v14M6 13l6 6 6-6" />
        }
        @case ('check') {
          <path d="M20 6 9 17l-5-5" />
        }
        @case ('sun') {
          <circle cx="12" cy="12" r="4" />
          <path
            d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"
          />
        }
        @case ('moon') {
          <path d="M20.5 13.4A8.5 8.5 0 1 1 10.6 3.5a6.6 6.6 0 0 0 9.9 9.9Z" />
        }
        @case ('menu') {
          <path d="M4 7h16M4 12h16M4 17h16" />
        }
        @case ('close') {
          <path d="M6 6l12 12M18 6 6 18" />
        }
        @case ('code') {
          <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
        }
        @case ('pen') {
          <path d="m12 19 7-7 3 3-7 7-3-3Z" />
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5ZM2 2l7.6 7.6" />
          <circle cx="11" cy="11" r="2" />
        }
        @case ('bolt') {
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
        }
        @case ('layout') {
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        }
        @case ('clock') {
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        }
        @case ('cap') {
          <path d="M22 9.5 12 5 2 9.5 12 14l10-4.5Z" />
          <path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5M22 9.5V15" />
        }
        @case ('expand') {
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        }
        @case ('verified') {
          <path d="M12 21.5s7.5-3.6 7.5-9.5V5.5L12 2.5l-7.5 3V12c0 5.9 7.5 9.5 7.5 9.5Z" />
          <path d="m9 12 2 2 4-4" />
        }
        @case ('mail') {
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3.5 7 8.5 6 8.5-6" />
        }
        @case ('github') {
          <path
            fill="currentColor"
            stroke="none"
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        }
        @case ('linkedin') {
          <path
            fill="currentColor"
            stroke="none"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          />
        }
        @case ('search') {
          <circle cx="11" cy="11" r="7" />
          <path d="m20.5 20.5-4.5-4.5" />
        }
        @case ('briefcase') {
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 13h18" />
        }
        @case ('download') {
          <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
        }
        @case ('phone') {
          <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
          <path d="M11 18.5h2" />
        }
        @case ('map-pin') {
          <path d="M12 21.5s-7-6.1-7-11.5a7 7 0 0 1 14 0c0 5.4-7 11.5-7 11.5Z" />
          <circle cx="12" cy="10" r="2.5" />
        }
        @case ('alert') {
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7.5v5.5M12 16.5h.01" />
        }
        @case ('pause') {
          <path d="M9 5.5v13M15 5.5v13" />
        }
        @case ('play') {
          <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
        }
        @case ('award') {
          <circle cx="12" cy="9" r="6" />
          <path d="M8.6 13.9 7 21.5l5-2.8 5 2.8-1.6-7.6" />
        }
      }
    </svg>
  `,
})
export class IconComponent {
  readonly name = input.required<IconName>();
}
