import { makeEnvironmentProviders } from '@angular/core';
import { TaskStore } from '../store/task.store';

export function provideTaskFeature() {
  return makeEnvironmentProviders([TaskStore]);
}
