import { makeEnvironmentProviders } from '@angular/core';
import { AuthRepository } from '../services/auth.repository';
import { AuthStore } from '../../../stores/auth.store';

export function provideAuthDomain() {
  return makeEnvironmentProviders([AuthRepository, AuthStore]);
}
