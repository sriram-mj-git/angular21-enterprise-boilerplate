import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideInfrastructure } from './core/providers/infrastructure.providers';
import { provideDomain } from './providers/domain.providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideInfrastructure(),
    provideDomain(),
    provideRouter(routes),
  ],
};
