import { setupWorker } from 'msw/browser';
import { authHandlers } from './auth/handlers/auth.handlers';
import { taskHandlers } from './tasks/handlers/task.handlers';
import { featureFlagHandlers } from './feature-flags/handlers/feature-flag.handlers';

export const worker = setupWorker(...authHandlers, ...taskHandlers, ...featureFlagHandlers);
