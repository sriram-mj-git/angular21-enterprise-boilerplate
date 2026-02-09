import { Routes } from '@angular/router';
import { provideTaskDomain } from '../../domains/tasks/providers/task.providers';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../../layout/shell/shell').then((m) => m.Shell),

    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },

      {
        path: 'tasks',
        providers: [provideTaskDomain()],
        loadComponent: () =>
          import('../../domains/tasks/ui/pages/task.page').then((m) => m.TaskPage),
      },
    ],
  },
];
