import { retry } from 'rxjs';

export function smartRetry() {
  return retry({
    count: 2,
    delay: 1000,
  });
}
