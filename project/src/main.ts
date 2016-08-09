import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

import { appRouterProviders } from './app/app.routes';

import { GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [GOOGLE_MAPS_PROVIDERS, appRouterProviders]);
