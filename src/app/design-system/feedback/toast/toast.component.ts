import { Component, inject } from '@angular/core';
import { ToastStore } from './toast.store';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  store = inject(ToastStore);
}
