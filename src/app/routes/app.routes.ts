import { Routes } from '@angular/router';

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
        loadComponent: () => import('../features/tasks/pages/task.page').then((m) => m.TaskPage),
      },
    ],
  },
];
