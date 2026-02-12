import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideCoreHttp } from './http.providers';
import { provideTheme } from '@design-system/theme/providers/theme.providers';
import { provideErrorHandling } from './error.providers';

export function provideCore(): EnvironmentProviders {
  return makeEnvironmentProviders([provideCoreHttp(), provideErrorHandling(), provideTheme()]);
}
