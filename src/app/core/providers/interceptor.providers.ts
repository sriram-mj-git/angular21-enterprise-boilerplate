import { authInterceptor } from '../interceptors/auth.interceptor';
import { withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from '../interceptors/loading.interceptor';

export function provideCoreInterceptors() {
  return withInterceptors([authInterceptor, loadingInterceptor]);
}
