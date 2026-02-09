import { makeEnvironmentProviders } from '@angular/core';
import { AuthRepository } from '../api/repositories/auth.repository';
import { AuthStore } from '../store/auth.store';

export function provideAuthDomain() {
  return makeEnvironmentProviders([AuthRepository, AuthStore]);
}
