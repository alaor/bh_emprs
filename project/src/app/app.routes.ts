import { provideRouter, RouterConfig } from '@angular/router';

import {EmployersComponent} from "./employers/employers.component";
import {HomeComponent} from "./home/home.component";


const routes: RouterConfig = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'employers', component: EmployersComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
