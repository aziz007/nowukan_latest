import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Load web fonts at runtime (browser only) so the production build stays
// self-contained and never fetches Google Fonts during `ng build`.
if (typeof document !== 'undefined') {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href =
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900' +
    '&family=Quicksand:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap';
  document.head.appendChild(link);
}

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
