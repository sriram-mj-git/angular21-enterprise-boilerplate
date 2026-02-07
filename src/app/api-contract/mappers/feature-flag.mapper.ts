import { FeatureFlagDto } from '../dtos/feature-flag.dto';
import { FeatureFlag } from '../models/feature-flag.model';

export function mapFeatureFlags(dtos: FeatureFlagDto[]): Record<FeatureFlag, boolean> {
  return dtos.reduce(
    (acc, dto) => {
      acc[dto.feature as FeatureFlag] = dto.enabled;

      return acc;
    },
    {} as Record<FeatureFlag, boolean>,
  );
}
