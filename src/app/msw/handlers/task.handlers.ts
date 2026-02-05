import { http, HttpResponse } from 'msw';
import { TASKS } from '../data/tasks.data';

export const taskHandlers = [
  http.get('/tasks', () => {
    return HttpResponse.json(TASKS);
  }),

  http.post('/tasks', async ({ request }) => {
    const body = (await request.json()) as {
      title: string;
    };

    const task = {
      id: crypto.randomUUID(),
      title: body.title,
      completed: false,
    };

    TASKS.push(task);

    return HttpResponse.json(task);
  }),
];
