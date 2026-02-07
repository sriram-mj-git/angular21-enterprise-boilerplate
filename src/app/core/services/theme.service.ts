import { effect, inject, Injectable } from '@angular/core';
import { ThemeStore } from '../../stores/theme.store';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private store = inject(ThemeStore);

  constructor() {
    effect(() => {
      const { mode, color } = this.store.theme();

      const body = document.body;

      body.classList.remove('dark', 'light');
      body.classList.remove('theme-purple', 'theme-blue', 'theme-green', 'theme-orange');

      body.classList.add(mode);
      body.classList.add(`theme-${color}`);
    });
  }
}
