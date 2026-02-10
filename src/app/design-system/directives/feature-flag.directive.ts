import { Directive, Input, TemplateRef, ViewContainerRef, inject, effect } from '@angular/core';
import { FeatureFlagStore } from '../../domains/feature-flags/store/feature-flag.store';
import { FeatureFlag } from '../../domains/feature-flags/models/feature-flag.model';

@Directive({
  selector: '[appFeature]',
  standalone: true,
})
export class FeatureFlagDirective {
  private templateRef = inject(TemplateRef<any>);
  private viewContainer = inject(ViewContainerRef);
  private store = inject(FeatureFlagStore);

  @Input({ required: true })
  set appFeature(flag: FeatureFlag) {
    effect(() => {
      const enabled = this.store.isEnabled(flag)();

      this.viewContainer.clear();

      if (enabled) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }
}
