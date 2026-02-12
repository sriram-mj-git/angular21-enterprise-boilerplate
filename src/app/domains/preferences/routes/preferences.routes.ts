import { Routes } from '@angular/router';

export const preferencesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../ui/pages/settings/settings').then((m) => m.Settings),
  },
];
