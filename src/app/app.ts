import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthStore } from './stores/auth.store';
import { ThemeStore } from './stores/theme.store';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  private themeStore = inject(ThemeStore);
  private theme = inject(ThemeService);
  private authStore = inject(AuthStore);

  // ⭐ effect inside field initializer (valid injection context)
  private debugEffect = effect(() => {
    console.log('USER => ', this.authStore.user());
    console.log('IS AUTH => ', this.authStore.isAuthenticated());
  });

  constructor() {
    this.themeStore.loadTheme();
    setTimeout(() => {
      this.themeStore.setMode('dark');
    }, 3000);
    this.authStore.login('admin', 'admin123');
  }
}
