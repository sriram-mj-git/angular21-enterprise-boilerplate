import { Directive, TemplateRef, ViewContainerRef, inject, effect, Input } from '@angular/core';

import { LoadingStore } from '../../stores/loading.store';

@Directive({
  selector: '[appSkeleton]',
  standalone: true,
})
export class SkeletonDirective {
  private template = inject(TemplateRef<any>);
  private vc = inject(ViewContainerRef);
  private loadingStore = inject(LoadingStore);

  @Input({ required: true })
  set appSkeleton(skeletonTemplate: TemplateRef<any>) {
    effect(() => {
      this.vc.clear();

      if (this.loadingStore.isLoading()) {
        this.vc.createEmbeddedView(skeletonTemplate);
      } else {
        this.vc.createEmbeddedView(this.template);
      }
    });
  }
}
