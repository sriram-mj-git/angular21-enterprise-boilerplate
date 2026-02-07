import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { RefreshTokenService } from '../services/refresh-token.service';
import { catchError, switchMap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenStorage = inject(TokenStorageService);
  const refreshService = inject(RefreshTokenService);

  const accessToken = tokenStorage.getAccessToken();

  const authReq = accessToken
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
    : req;

  return next(authReq).pipe(
    catchError((error) => {
      if (
        error instanceof HttpErrorResponse &&
        error.status === 401 &&
        tokenStorage.getRefreshToken()
      ) {
        return refreshService.refreshToken().pipe(
          switchMap((newToken) => {
            refreshService.clearRefreshProcess();

            const retryReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${newToken}`,
              },
            });

            return next(retryReq);
          }),

          catchError((err) => {
            tokenStorage.clearAll();
            return throwError(() => err);
          }),
        );
      }

      return throwError(() => error);
    }),
  );
};
