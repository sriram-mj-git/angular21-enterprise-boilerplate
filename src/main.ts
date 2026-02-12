import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig, envConfig } from '@app-shell';

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
