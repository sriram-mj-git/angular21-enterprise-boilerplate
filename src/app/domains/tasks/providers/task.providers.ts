import { makeEnvironmentProviders } from '@angular/core';
import { TaskStore } from '../store/task.store';

export function provideTaskDomain() {
  return makeEnvironmentProviders([TaskStore]);
}
