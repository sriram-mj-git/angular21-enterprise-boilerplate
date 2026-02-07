import { Role } from '../../api-contract/models/user.model';

export interface RoleRouteData {
  roles: Role[];
}

export interface PermissionRouteData {
  permissions: string[];
}
