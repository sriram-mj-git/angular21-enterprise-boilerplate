import { http, HttpResponse } from 'msw';

export const featureFlagHandlers = [
  http.get('/features', () => {
    return HttpResponse.json([
      { feature: 'TASK_EXPORT', enabled: true },
      { feature: 'TASK_ANALYTICS', enabled: false },
      { feature: 'ADMIN_PANEL', enabled: true },
    ]);
  }),
];
