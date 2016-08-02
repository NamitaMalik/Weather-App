/**
 * Created by namita on 7/30/16.
 */
import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {LoginFormComponent} from './login-form.component';

@Component({
    template: `
    <div>
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {
}