import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthStore } from '../../stores/auth.store';
import { RoleRouteData } from '../models/route-auth.model';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const requiredRoles = (route.data as RoleRouteData).roles;

  const authStore = inject(AuthStore);
  const router = inject(Router);

  const user = authStore.user();

  if (!user) {
    router.navigate(['/login']);
    return false;
  }

  const hasRole = requiredRoles.some((role) => user.roles.includes(role));

  if (!hasRole) {
    router.navigate(['/unauthorized']);
    return false;
  }

  return true;
};
