import { Directive, Input, TemplateRef, ViewContainerRef, inject, effect } from '@angular/core';

import { AuthStore } from '../../stores/auth.store';

@Directive({
  selector: '[appHasPermission]',
})
export class HasPermissionDirective {
  private templateRef = inject(TemplateRef<any>);
  private viewContainer = inject(ViewContainerRef);
  private authStore = inject(AuthStore);

  @Input({ required: true })
  set appHasPermission(permission: string) {
    effect(() => {
      const user = this.authStore.user();

      const allowed = user?.permissions.includes(permission);

      this.viewContainer.clear();

      if (allowed) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }
}
