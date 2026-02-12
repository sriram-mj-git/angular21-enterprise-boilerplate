import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from '../error-handlers/global-error.handler';

export function provideErrorHandling() {
  return [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ];
}
