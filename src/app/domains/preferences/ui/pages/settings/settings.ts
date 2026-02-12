import { Component } from '@angular/core';
import { ThemeSwitchComponent } from '@design-system/theme';

@Component({
  selector: 'app-settings',
  imports: [ThemeSwitchComponent],
  templateUrl: './settings.html',
})
export class Settings {}
