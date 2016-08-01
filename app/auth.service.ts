/**
 * Created by namita on 7/27/16.
 */

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Credential} from './login/credential'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    constructor (private http: Http) {
        localStorage.setItem("userName","assignment@rentomojo.com");
        localStorage.setItem("password","Rentomojo123@");
        localStorage.setItem("isLoggedIn","false");
    }
    isLoggedIn: boolean = false;
    redirectUrl: string;


    /*login(form): Observable<Credential> {
        let url = 'http://medicalassistant­jazzyarchitect.rhcloud.com/api/user/login';
        let body = JSON.stringify({ name:form.username,password:form.password });
        let headers = new Headers({'Content-Type':'application/json','x­service­id':'RandomUsesKey­86452'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
        //return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }*/

    /*private extractData(res: Response) {
     let body = res.json();
     return body;
     }

     private handleError (error: any) {
     let errMsg = (error.message) ? error.message :
     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
     console.error(errMsg); // log to console instead
     return Observable.throw(errMsg);
     }*/

    login(form){
        let validEmail = localStorage.getItem("userName");
        let validPass = localStorage.getItem("password");
        if(form.username==validEmail && form.password==validPass ){
            this.redirectUrl = '/weather';
            localStorage.setItem("isLoggedIn","true");
            return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
        }else{
            this.redirectUrl = '/login';
            localStorage.setItem("isLoggedIn","false");
            return Observable.of(true).delay(1000).do(val => this.isLoggedIn = false);
        }


    }

    logout() {
        this.isLoggedIn = false;
    }
}