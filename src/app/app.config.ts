import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // The first paint must already contain the page. Otherwise the shell paints
      // with an empty <main>, the footer sits under the header, and then jumps
      // ~5000px when the page lands: a full-viewport layout shift (CLS 1.0).
      withEnabledBlockingInitialNavigation(),
      withViewTransitions({ skipInitialTransition: true }),
      // New pages start at the top, Back/Forward restore position, and
      // links with a fragment (e.g. "/#work") scroll to and focus that section.
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
    ),
    provideHttpClient(),
  ],
};
