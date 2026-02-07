import { makeEnvironmentProviders } from '@angular/core';
import { provideAuthDomain } from '../features/auth/providers/auth.providers';

export function provideDomain() {
  return makeEnvironmentProviders([provideAuthDomain()]);
}
