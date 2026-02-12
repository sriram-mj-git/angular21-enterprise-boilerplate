import { ErrorHandler, Injectable, inject } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ToastStore } from '../../design-system/feedback/toast/toast.store';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private logger = inject(LoggerService);
  private toast = inject(ToastStore);

  handleError(error: unknown) {
    this.logger.error('Unhandled Application Error', error);

    this.toast.show('Unexpected application error occurred', 'error');
  }
}
