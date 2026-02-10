import { Directive, TemplateRef, ViewContainerRef, inject, effect, input } from '@angular/core';
import { LoadingStore } from '../../core/state/loading.store';

@Directive({
  selector: '[appSkeleton]',
  standalone: true,
})
export class SkeletonDirective {
  private template = inject(TemplateRef<any>);
  private vc = inject(ViewContainerRef);
  private loadingStore = inject(LoadingStore);

  // ⭐ IMPORTANT: name must match selector
  appSkeleton = input<TemplateRef<any>>();

  constructor() {
    effect(() => {
      const skeleton = this.appSkeleton();

      if (!skeleton) return;

      this.vc.clear();

      if (this.loadingStore.isLoading()) {
        this.vc.createEmbeddedView(skeleton);
      } else {
        this.vc.createEmbeddedView(this.template);
      }
    });
  }
}
