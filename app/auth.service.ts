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
    constructor (private http: Http) {}
    isLoggedIn: boolean = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    /*addHero (name: string): Observable<Hero> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.heroesUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }*/

    login(form): Observable<Credential> {
        let url = 'http://medicalassistant­jazzyarchitect.rhcloud.com/api/user/login';
        console.log("auth",form);
        let body = JSON.stringify({ name:form.username,password:form.password });
        let headers = new Headers({'Content-Type':'application/json','x­service­id':'RandomUsesKey­86452'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);



        //return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body || [];
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


    logout() {
        this.isLoggedIn = false;
    }
}