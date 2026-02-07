import { makeEnvironmentProviders } from '@angular/core';
import { provideCoreHttp } from './http.providers';
import { provideLogging } from './logging.providers';
import { provideErrorHandling } from './error.providers';
import { provideTheme } from './theme.providers';

export function provideInfrastructure() {
  return makeEnvironmentProviders([
    provideCoreHttp(),
    provideLogging(),
    provideErrorHandling(),
    provideTheme(),
  ]);
}
