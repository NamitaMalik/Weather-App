/**
 * Created by namita on 7/30/16.
 */

import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Credential } from './credential';
import { Router }      from '@angular/router';
import {AuthService} from '../auth.service'

@Component({
    selector: 'login-form',
    templateUrl: 'app/login/login-form.component.html'
})
export class LoginFormComponent {
    constructor(private _authService:AuthService, private router:Router) {
    }

    credential = new Credential('', '');
    submitted = false;
    status = false;
    errorMessage = '';

    onSubmit(form) {
        this.submitted = true;
        this.errorMessage = '';
        this._authService.login(form)
            .subscribe(
            (status)  => {
                this.status = <any>status;
                if (this.status) {
                    this.router.navigate([this._authService.redirectUrl]);
                } else {
                    this.errorMessage = 'Invalid username or password.';
                }
            })
    }
}