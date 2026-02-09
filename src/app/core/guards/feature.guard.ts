import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot } from '@angular/router';
import { FeatureFlag } from '../../domains/feature-flags/models/feature-flag.model';
import { FeatureFlagStore } from '../../domains/feature-flags/store/feature-flag.store';

export const featureGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const feature = route.data['feature'] as FeatureFlag;

  const store = inject(FeatureFlagStore);

  return store.isEnabled(feature)();
};
