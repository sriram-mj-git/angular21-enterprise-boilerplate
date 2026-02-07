import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import { envConfig } from './app/config/env.config';

async function prepareApp() {
  if (envConfig.enableMsw && typeof window !== 'undefined') {
    const { worker } = await import('./app/msw/browser');

    await worker.start({
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },

      onUnhandledRequest: 'bypass',
    });
  }
}

prepareApp().then(() => {
  bootstrapApplication(App, appConfig).catch((err) => console.error(err));
});
