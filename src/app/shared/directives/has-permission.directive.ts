import { Directive, TemplateRef, ViewContainerRef, inject, effect, input } from '@angular/core';

import { AuthStore } from '../../stores/auth.store';

@Directive({
  selector: '[appHasPermission]',
})
export class HasPermissionDirective {
  private template = inject(TemplateRef<any>);
  private vc = inject(ViewContainerRef);
  private authStore = inject(AuthStore);

  // ⭐ Must match selector name
  appHasPermission = input<string>();

  constructor() {
    effect(() => {
      const permission = this.appHasPermission();
      const user = this.authStore.user();

      if (!permission) return;

      const allowed = user?.permissions.includes(permission);

      this.vc.clear();

      if (allowed) {
        this.vc.createEmbeddedView(this.template);
      }
    });
  }
}
