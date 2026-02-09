import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PrefetchService {
  constructor(private router: Router) {}

  prefetch(url: string) {
    this.router
      .navigateByUrl(url, { skipLocationChange: true })
      .then(() => this.router.navigateByUrl('/'));
  }
}
