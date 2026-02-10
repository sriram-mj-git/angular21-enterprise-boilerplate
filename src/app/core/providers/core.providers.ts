import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideCoreHttp } from './http.providers';
import { provideTheme } from '../../design-system/theme/providers/theme.providers';

export function provideCore(): EnvironmentProviders {
  return makeEnvironmentProviders([provideCoreHttp(), provideTheme()]);
}
