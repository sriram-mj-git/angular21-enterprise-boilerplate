import { makeEnvironmentProviders } from '@angular/core';
import { provideAuthDomain } from '../../domains/auth/providers/auth.providers';

export function provideDomain() {
  return makeEnvironmentProviders([provideAuthDomain()]);
}
