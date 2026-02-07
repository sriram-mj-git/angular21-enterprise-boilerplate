import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthRepository } from './features/auth/services/auth.repository';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private repo = inject(AuthRepository);
  ngOnInit() {
    this.repo.login('admin', 'admin123').subscribe(console.log);
  }
}
