import { http, HttpResponse } from 'msw';
import { USERS } from '../data/users.data';

let accessToken = 'valid-access-token';
let tokenExpired = false;

export const authHandlers = [
  http.post('/auth/login', async ({ request }) => {
    const body = (await request.json()) as {
      username: string;
      password: string;
    };

    const user = USERS.find((u) => u.username === body.username && u.password === body.password);

    if (!user) {
      return HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    return HttpResponse.json({
      accessToken: `access-${user.id}`,
      refreshToken: `refresh-${user.id}`,
      userId: user.id,
    });
  }),

  http.post('/auth/refresh', () => {
    tokenExpired = false;

    return HttpResponse.json({
      accessToken: crypto.randomUUID(),
    });
  }),

  http.get('/auth/permissions', ({ request }) => {
    const token = request.headers.get('Authorization');

    if (!token || tokenExpired) {
      return HttpResponse.json({ message: 'Token expired' }, { status: 401 });
    }

    return HttpResponse.json({
      roles: ['ADMIN'],
      permissions: ['TASK_CREATE', 'TASK_DELETE'],
    });
  }),
];
