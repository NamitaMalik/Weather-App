/**
 * Created by namita on 7/31/16.
 */


import {Injectable} from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {
    constructor (private http: Http) {}

    getData (city): Observable<any> {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=bc9a99b72eb27eb6fcc062633cb84188';
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body;
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}