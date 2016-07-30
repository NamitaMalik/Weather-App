/**
 * Created by namita on 7/30/16.
 */

import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Credential }    from './credential';

@Component({
    selector: 'login-form',
    templateUrl: 'app/login/login-form.component.html'
})
export class LoginFormComponent {

    credential = new Credential('assignment@rentomojo.com','Rentomojo123@');
    submitted = false;
    onSubmit() { this.submitted = true; }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.credential); }
}