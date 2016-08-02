/**
 * Created by namita on 7/30/16.
 */

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService }  from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
    private isLoggedIn:boolean;

    constructor(private authService:AuthService, private router:Router) {
    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
        this.authService.isLoggedIn.subscribe(loggedIn => {
            this.isLoggedIn = loggedIn
        });
        if (this.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    }
}

export const authProviders = [AuthGuard, AuthService];

