import { inject, Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { Observable, map, shareReplay, tap } from 'rxjs';
import { HttpService } from '../../../core/services/http.service';

@Injectable({ providedIn: 'root' })
export class RefreshTokenService {
  private http = inject(HttpService);
  private tokenStorage = inject(TokenStorageService);

  private refreshRequest$?: Observable<string>;

  refreshToken(): Observable<string> {
    if (!this.refreshRequest$) {
      this.refreshRequest$ = this.http
        .post<{ accessToken: string }>('/auth/refresh', {
          refreshToken: this.tokenStorage.getRefreshToken(),
        })
        .pipe(
          tap((res) => {
            this.tokenStorage.setAccessToken(res.accessToken);
          }),

          // ⭐ Extract string token
          map((res) => res.accessToken),

          shareReplay(1),
        );
    }

    return this.refreshRequest$;
  }

  clearRefreshProcess() {
    this.refreshRequest$ = undefined;
  }
}
