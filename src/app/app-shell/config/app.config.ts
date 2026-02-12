import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

import { provideRouter } from '@angular/router';
import { provideCore } from '@core/providers/core.providers';
import { routes } from '../routes/app.routes';
import { provideDomain } from '../providers/domain.providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideCore(),
    provideDomain(),
    provideRouter(routes),
  ],
};
