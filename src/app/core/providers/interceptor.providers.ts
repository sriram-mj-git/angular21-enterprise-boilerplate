import { authInterceptor } from '../interceptors/auth.interceptor';
import { withInterceptors } from '@angular/common/http';

export function provideCoreInterceptors() {
  return withInterceptors([authInterceptor]);
}
