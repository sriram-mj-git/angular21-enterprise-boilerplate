import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from '@design-system/feedback/toast/toast.component';
import { Header } from '../header/header';

@Component({
  selector: 'app-shell',
  imports: [Header, RouterOutlet, ToastComponent],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {}
