/**
 * Created by namita on 7/30/16.
 */

import {Component} from '@angular/core';
import './rxjs-operators';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
        <a routerLink="/login">Login</a>
        <a routerLink="/weather" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Weather</a>
        <router-outlet></router-outlet>

    `,
    directives:[ROUTER_DIRECTIVES]

})

export class AppComponent {
}