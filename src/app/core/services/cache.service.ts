import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CacheService {
  private cache = new Map<string, unknown>();

  get<T>(key: string): T | null {
    return (this.cache.get(key) as T) ?? null;
  }

  set(key: string, value: unknown) {
    this.cache.set(key, value);
  }

  clear(key: string) {
    this.cache.delete(key);
  }

  clearAll() {
    this.cache.clear();
  }
}
