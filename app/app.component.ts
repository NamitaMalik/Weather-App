/**
 * Created by namita on 7/30/16.
 */
import {Component,Inject} from '@angular/core';
import './rxjs-operators';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import {AuthService} from './auth.service';

@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <ul class="nav navbar-nav">
                    <li *ngIf="isLoggedIn"><a routerLink="/weather" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Weather</a></li>
                    <li *ngIf="isLoggedIn"> <a href="javascript:void(0)" (click)="logout()">Logout</a></li>
                </ul>
            </div>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]

})

export class AppComponent {
    private isLoggedIn:boolean = false;

    constructor(private authService:AuthService) {
        authService.isLoggedIn.subscribe(loggedIn => {
            this.isLoggedIn = loggedIn
        });
    }

    logout() {
        this.authService.logout();
    }

}