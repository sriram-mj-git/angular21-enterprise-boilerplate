import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenStorageService {
  private accessTokenSignal = signal<string | null>(null);

  private readonly REFRESH_KEY = 'refresh_token';

  // -------- Access Token (Memory) --------

  setAccessToken(token: string) {
    this.accessTokenSignal.set(token);
  }

  getAccessToken(): string | null {
    return this.accessTokenSignal();
  }

  clearAccessToken() {
    this.accessTokenSignal.set(null);
  }

  // -------- Refresh Token (Storage) --------

  setRefreshToken(token: string) {
    localStorage.setItem(this.REFRESH_KEY, token);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_KEY);
  }

  clearRefreshToken() {
    localStorage.removeItem(this.REFRESH_KEY);
  }

  clearAll() {
    this.clearAccessToken();
    this.clearRefreshToken();
  }
}
