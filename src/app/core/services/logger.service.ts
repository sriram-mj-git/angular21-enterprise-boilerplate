import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  log(message: string, data?: unknown) {
    console.log(`[LOG]: ${message}`, data ?? '');
  }

  warn(message: string, data?: unknown) {
    console.warn(`[WARN]: ${message}`, data ?? '');
  }

  error(message: string, data?: unknown) {
    console.error(`[ERROR]: ${message}`, data ?? '');
  }
}
