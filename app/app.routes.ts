/**
 * Created by namita on 7/30/16.
 */

import {provideRouter,RouterConfig } from '@angular/router';
import {AppComponent} from './app.component';
import {authProviders,AuthGuard} from './auth-guard.service';
import {WeatherComponent} from './weather/weather.component';
import {LoginComponent} from './login/login.component';
import {LoginFormComponent} from './login/login-form.component';
import {WeatherSearchComponent} from './weather/weather-search.component';

export const routes:RouterConfig = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent,
        children: [
            {
                path: '',
                component: LoginFormComponent
            }]
    },
    {
        path: 'weather', component: WeatherComponent, canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: WeatherSearchComponent
            }]
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    authProviders
];