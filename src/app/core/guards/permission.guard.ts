import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../../domains/auth/store/auth.store';
import { PermissionRouteData } from '../../domains/auth/contracts/route-auth.contract';

export const permissionGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const requiredPermissions = (route.data as PermissionRouteData).permissions;

  const authStore = inject(AuthStore);
  const router = inject(Router);

  const user = authStore.user();

  if (!user) {
    router.navigate(['/login']);
    return false;
  }

  const hasPermission = requiredPermissions.every((p) => user.permissions.includes(p));

  if (!hasPermission) {
    router.navigate(['/unauthorized']);
    return false;
  }

  return true;
};
