import { makeEnvironmentProviders } from '@angular/core';

export function provideErrorHandling() {
  return makeEnvironmentProviders([
    // Will register GlobalErrorHandler later
  ]);
}
