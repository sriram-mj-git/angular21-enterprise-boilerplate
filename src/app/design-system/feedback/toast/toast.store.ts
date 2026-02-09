import { Injectable, signal } from '@angular/core';

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

@Injectable({ providedIn: 'root' })
export class ToastStore {
  private toastsSignal = signal<Toast[]>([]);
  toasts = this.toastsSignal.asReadonly();

  show(message: string, type: Toast['type']) {
    console.log('toste called');
    const toast: Toast = {
      id: crypto.randomUUID(),
      message,
      type,
    };

    this.toastsSignal.update((list) => [...list, toast]);

    setTimeout(() => this.remove(toast.id), 4000);
  }

  remove(id: string) {
    this.toastsSignal.update((list) => list.filter((t) => t.id !== id));
  }
}
