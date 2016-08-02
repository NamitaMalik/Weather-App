/**
 * Created by namita on 7/30/16.
 */
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
bootstrap(<any>AppComponent,
    [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS, disableDeprecatedForms(), provideForms()]
).catch(err => console.error(err));