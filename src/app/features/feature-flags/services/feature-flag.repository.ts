import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

import { HttpService } from '../../../core/services/http.service';
import { FeatureFlagDto } from '../../../api-contract/dtos/feature-flag.dto';
import { mapFeatureFlags } from '../../../api-contract/mappers/feature-flag.mapper';

@Injectable({ providedIn: 'root' })
export class FeatureFlagRepository {
  private http = inject(HttpService);

  getFlags() {
    return this.http.get<FeatureFlagDto[]>('/features').pipe(map(mapFeatureFlags));
  }
}
