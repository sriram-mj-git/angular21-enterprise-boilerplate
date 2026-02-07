import { computed, inject, Injectable, signal } from '@angular/core';
import { FeatureFlagRepository } from '../features/feature-flags/services/feature-flag.repository';
import { FeatureFlag } from '../api-contract/models/feature-flag.model';

@Injectable({ providedIn: 'root' })
export class FeatureFlagStore {
  private repo = inject(FeatureFlagRepository);

  private flagsSignal = signal<Record<string, boolean>>({});

  flags = this.flagsSignal.asReadonly();

  loadFlags() {
    this.repo.getFlags().subscribe((flags) => {
      this.flagsSignal.set(flags);
    });
  }

  isEnabled(flag: FeatureFlag) {
    return computed(() => !!this.flagsSignal()[flag]);
  }
}
