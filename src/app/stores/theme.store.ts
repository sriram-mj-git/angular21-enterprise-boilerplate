import { computed, Injectable, signal } from '@angular/core';
import { ThemeConfig, ThemeMode, ThemeColor } from '../api-contract/models/theme.model';

@Injectable({ providedIn: 'root' })
export class ThemeStore {
  private readonly STORAGE_KEY = 'app_theme';

  private themeSignal = signal<ThemeConfig>({
    mode: 'light',
    color: 'purple',
  });

  theme = this.themeSignal.asReadonly();

  mode = computed(() => this.themeSignal().mode);
  color = computed(() => this.themeSignal().color);

  setMode(mode: ThemeMode) {
    this.updateTheme({ mode });
  }

  setColor(color: ThemeColor) {
    this.updateTheme({ color });
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
