import { Routes } from '@angular/router';
import { provideTaskFeature } from '../features/tasks/providers/task.providers';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../layout/shell/shell').then((m) => m.Shell),

    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },

      {
        path: 'tasks',
        providers: [provideTaskFeature()],
        loadComponent: () => import('../features/tasks/pages/task.page').then((m) => m.TaskPage),
      },
    ],
  },
];
