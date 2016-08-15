import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideForms, disableDeprecatedForms } from "@angular/forms";
import { HTTP_PROVIDERS } from "@angular/http";
import { AppComponent, environment } from './app/';

import { appRouterProviders } from './app/app.routes';

import { GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  provideForms(),
  disableDeprecatedForms(),
  GOOGLE_MAPS_PROVIDERS,
  appRouterProviders,
  HTTP_PROVIDERS
]);
