/**
 * Created by namita on 7/28/16.
 */

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';
bootstrap(<any>AppComponent, [HTTP_PROVIDERS,APP_ROUTER_PROVIDERS])
    .catch(err => console.error(err));