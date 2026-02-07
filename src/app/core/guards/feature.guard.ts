import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot } from '@angular/router';
import { FeatureFlagStore } from '../../stores/feature-flag.store';
import { FeatureFlag } from '../../api-contract/models/feature-flag.model';

export const featureGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const feature = route.data['feature'] as FeatureFlag;

  const store = inject(FeatureFlagStore);

  return store.isEnabled(feature)();
};
