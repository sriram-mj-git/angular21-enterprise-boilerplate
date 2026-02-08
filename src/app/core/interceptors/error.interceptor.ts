import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { ToastStore } from '../../shared/ui/toast/toast.store';
import { LoggerService } from '../services/logger.service';
import { classifyHttpError } from '../utils/error-classifier';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastStore);
  const logger = inject(LoggerService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const message = classifyHttpError(error.status);

      toast.show(message, 'error');

      logger.error('HTTP Error', error);

      return throwError(() => error);
    }),
  );
};
