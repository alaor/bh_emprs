"use strict";
var router_1 = require('@angular/router');
var employers_component_1 = require("./employers/employers.component");
var home_component_1 = require("./home/home.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'employers', component: employers_component_1.EmployersComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map