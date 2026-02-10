import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PerformanceService {
  measure(label: string, fn: () => void) {
    const start = performance.now();

    fn();

    const end = performance.now();

    console.log(`${label}: ${end - start}ms`);
  }
}
