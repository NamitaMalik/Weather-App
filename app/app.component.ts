/**
 * Created by namita on 7/30/16.
 */

import {Component} from '@angular/core';
import './rxjs-operators';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
            <ul class="nav navbar-nav">
                <li><a routerLink="/weather" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Weather</a></li>
                <li *ngIf="isLoggedIn=='false'"> <a routerLink="/login">Login</a></li>
            </ul>
        </div>
        </nav>
        <router-outlet></router-outlet>

    `,
    directives:[ROUTER_DIRECTIVES]

})

export class AppComponent {
    private isLoggedIn = localStorage.getItem("isLoggedIn");
}