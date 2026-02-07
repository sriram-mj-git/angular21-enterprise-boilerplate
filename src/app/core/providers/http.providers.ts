import { provideHttpClient } from '@angular/common/http';
import { provideCoreInterceptors } from './interceptor.providers';

export function provideCoreHttp() {
  return provideHttpClient(provideCoreInterceptors());
}
