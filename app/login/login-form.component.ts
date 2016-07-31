/**
 * Created by namita on 7/30/16.
 */

import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Credential } from './credential';
import {AuthService} from '../auth.service'

@Component({
    selector: 'login-form',
    templateUrl: 'app/login/login-form.component.html'
})
export class LoginFormComponent {
    constructor(private _authService:AuthService) {
    }

    credential = new Credential('', '');
    submitted = false;
    status = false;
    errorMessage = '';

    onSubmit(form) {
        this.submitted = true;
        this._authService.login(form)
            .subscribe(
                status  => this.status = <any>status,
                error =>  this.errorMessage = <any>error);
    }
}