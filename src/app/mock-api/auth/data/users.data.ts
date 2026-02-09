export type Role = 'ADMIN' | 'MANAGER' | 'USER';

export interface MockUser {
  id: string;
  username: string;
  password: string;
  role: Role;
}

export const USERS: MockUser[] = [
  {
    id: '1',
    username: 'admin',
    password: 'admin123',
    role: 'ADMIN',
  },
  {
    id: '2',
    username: 'manager',
    password: 'manager123',
    role: 'MANAGER',
  },
  {
    id: '3',
    username: 'user',
    password: 'user123',
    role: 'USER',
  },
];
