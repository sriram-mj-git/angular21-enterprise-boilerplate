import { Component, inject } from '@angular/core';
import { ThemeColor, ThemeMode, ThemeStore } from '@design-system/theme';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-settings',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './settings.html',
})
export class Settings {
  private themeStore = inject(ThemeStore);

  mode = this.themeStore.mode;
  color = this.themeStore.color;

  setMode(mode: ThemeMode) {
    this.themeStore.setMode(mode);
  }

  setColor(color: ThemeColor) {
    this.themeStore.setColor(color);
  }

  reset() {
    this.themeStore.reset();
  }
}
