/**
 * Created by namita on 7/30/16.
 */

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Credential} from './login/credential';
import {BehaviorSubject} from 'rxjs/Rx';
import { Router } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    isLoggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    redirectUrl:string;

    constructor(private http:Http, private router:Router) {
        localStorage.setItem("userName", "assignment@rentomojo.com");
        localStorage.setItem("password", "Rentomojo123@");
        let status = localStorage.getItem("isLoggedIn") == 'false' || localStorage.getItem("isLoggedIn") == undefined ? false : true;
        this.isLoggedIn.next(status);
    }

    // TODO: uncomment this code when api starts working.
    /*login(form):Observable<Credential> {
        let url = 'http://medicalassistant­jazzyarchitect.rhcloud.com/api/user/login';
        let body = JSON.stringify({name: form.username, password: form.password});
        let headers = new Headers({'Content-Type': 'application/json', 'x­service­id': 'RandomUsesKey­86452'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        return body;
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }*/

    login(form) {
        // Validating username and password from local-storage for now
        let validEmail = localStorage.getItem("userName");
        let validPass = localStorage.getItem("password");
        if (form.username == validEmail && form.password == validPass) {
            this.redirectUrl = '/weather';
            localStorage.setItem("isLoggedIn", "true");
            return Observable.of(true).delay(1000).do(val => this.isLoggedIn.next(true));
        } else {
            this.redirectUrl = '/login';
            localStorage.setItem("isLoggedIn", "false");
            return Observable.of(false).delay(1000).do(val => this.isLoggedIn.next(false));
        }

    }

    logout() {
        localStorage.setItem("isLoggedIn", "false");
        this.router.navigate(['/login']);
        this.isLoggedIn.next(false);
    }
}