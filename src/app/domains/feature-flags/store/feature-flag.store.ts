import { computed, inject, Injectable, signal } from '@angular/core';
import { FeatureFlag } from '../models/feature-flag.model';
import { FeatureFlagRepository } from '../api/repositories/feature-flag.repository';

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
