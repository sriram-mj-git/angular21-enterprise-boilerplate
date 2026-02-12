import { computed, Injectable, signal } from '@angular/core';
import { ThemeConfig, ThemeMode, ThemeColor } from '../models/theme.model';

@Injectable({ providedIn: 'root' })
export class ThemeStore {
  private readonly STORAGE_KEY = 'app_theme';

  private readonly initialConfig: ThemeConfig = {
    mode: 'light',
    color: 'orange',
  };

  private themeSignal = signal<ThemeConfig>(this.initialConfig);

  theme = this.themeSignal.asReadonly();

  mode = computed(() => this.themeSignal().mode);
  color = computed(() => this.themeSignal().color);

  setMode(mode: ThemeMode) {
    this.updateTheme({ mode });
  }

  setColor(color: ThemeColor) {
    this.updateTheme({ color });
  }

  reset() {
    this.updateTheme(this.initialConfig);
  }

  private updateTheme(partial: Partial<ThemeConfig>) {
    const newTheme = {
      ...this.themeSignal(),
      ...partial,
    };

    this.themeSignal.set(newTheme);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newTheme));
  }

  loadTheme() {
    const saved = localStorage.getItem(this.STORAGE_KEY);

    if (saved) {
      this.themeSignal.set(JSON.parse(saved));
    }
  }
}
