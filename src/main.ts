import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';

import { envConfig } from './app/app-shell/config/env.config';
import { appConfig } from './app/app-shell/config/app.config';

async function prepareApp() {
  if (envConfig.enableMsw && typeof window !== 'undefined') {
    const { worker } = await import('./app/mock-api/browser');

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
