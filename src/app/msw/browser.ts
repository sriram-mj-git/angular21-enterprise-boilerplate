import { setupWorker } from 'msw/browser';
import { authHandlers } from './handlers/auth.handlers';
import { taskHandlers } from './handlers/task.handlers';
import { featureFlagHandlers } from './handlers/feature-flag.handlers';

export const worker = setupWorker(...authHandlers, ...taskHandlers, ...featureFlagHandlers);
