import { makeEnvironmentProviders } from '@angular/core';
import { AuthStore } from '../auth.store';

export function provideStores() {
  return makeEnvironmentProviders([AuthStore]);
}
