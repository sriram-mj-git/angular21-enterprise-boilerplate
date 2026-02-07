import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideCoreHttp } from './http.providers';

export function provideCore(): EnvironmentProviders {
  return makeEnvironmentProviders([provideCoreHttp()]);
}
