import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

import { HttpService } from '../../../../core/services/http.service';
import { FeatureFlagDto } from '../dtos/feature-flag.dto';
import { mapFeatureFlags } from '../mappers/feature-flag.mapper';

@Injectable({ providedIn: 'root' })
export class FeatureFlagRepository {
  private http = inject(HttpService);

  getFlags() {
    return this.http.get<FeatureFlagDto[]>('/features').pipe(map(mapFeatureFlags));
  }
}
