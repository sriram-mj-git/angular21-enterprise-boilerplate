import { Component, inject } from '@angular/core';
import { ThemeStore } from '../../stores/theme.store';

@Component({
  template: `
    <button (click)="toggleMode()">Toggle Mode</button>

    <select (change)="changeColor($event)">
      <option value="purple">Purple</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="orange">Orange</option>
    </select>
  `,
})
export class ThemeSwitchComponent {
  private store = inject(ThemeStore);

  toggleMode() {
    const mode = this.store.mode() === 'light' ? 'dark' : 'light';
    this.store.setMode(mode);
  }

  changeColor(event: any) {
    this.store.setColor(event.target.value);
  }
}
