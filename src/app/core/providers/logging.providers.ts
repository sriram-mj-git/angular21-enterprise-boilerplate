import { makeEnvironmentProviders } from '@angular/core';

export function provideLogging() {
  return makeEnvironmentProviders([
    // Will register LoggerService later
  ]);
}
