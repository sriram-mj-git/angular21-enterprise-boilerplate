import { makeEnvironmentProviders } from '@angular/core';
import { ThemeService } from '../services/theme.service';

export function provideTheme() {
  return makeEnvironmentProviders([ThemeService]);
}
