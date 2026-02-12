import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from '@design-system/feedback/toast/toast.component';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, ToastComponent],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {}
