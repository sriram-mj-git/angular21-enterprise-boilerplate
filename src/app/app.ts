import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthStore } from './stores/auth.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  private authStore = inject(AuthStore);

  // ⭐ effect inside field initializer (valid injection context)
  private debugEffect = effect(() => {
    console.log('USER => ', this.authStore.user());
    console.log('IS AUTH => ', this.authStore.isAuthenticated());
  });

  constructor() {
    this.authStore.login('admin', 'admin123');
  }
}
