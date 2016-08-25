"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var _1 = require('./app/');
var app_routes_1 = require('./app/app.routes');
var core_2 = require('angular2-google-maps/core');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [
    forms_1.provideForms(),
    forms_1.disableDeprecatedForms(),
    core_2.GOOGLE_MAPS_PROVIDERS,
    app_routes_1.appRouterProviders,
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map