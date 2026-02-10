export type Role = 'ADMIN' | 'MANAGER' | 'USER';

export interface User {
  id: string;
  roles: Role[];
  permissions: string[];
}
