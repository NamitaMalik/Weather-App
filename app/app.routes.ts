/**
 * Created by namita on 7/7/16.
 */

import {provideRouter,RouterConfig } from '@angular/router';
import {AppComponent} from './app.component';
import {authProviders,AuthGuard} from './auth-guard.service';
import {WeatherComponent} from './weather/weather.component';
import {LoginComponent} from './login/login.component';
import {LoginFormComponent} from './login/login-form.component';
import {WeatherSearchComponent} from './weather/weather-search.component';

//RouterConfig is an array of routes
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

//This exports not only includes application rules but also services such as Router
//Router - Displays the application component for the active URL. Manages navigation from one component to the next.
export const APP_ROUTER_PROVIDERS = [
    //This is required to make our routes available to the application. Angular 2 using dependency injection to achieve this. provideRouter function creates providers for us.
    provideRouter(routes),
    authProviders
];
