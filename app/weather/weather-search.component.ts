/**
 * Created by namita on 7/31/16.
 */

import {Component} from '@angular/core';
import {WeatherService} from './weather-service';
import {Weather} from './weather';

@Component({
    template: `
    <div>
        <h2>Search Component</h2>
        <div class="container">
        <div>
            <input type="text" [(ngModel)]="search.term" name="searchterm" #searchterm="ngModel" required>
             <button type="button" (click)= "getData()" class="btn btn-default">Submit</button>
        </div>
        <div>
        <div>{{weather?.name}} {{weather?.country}}</div>

        </div>
        </div>
    </div>
    `
})

export class WeatherSearchComponent {
    private search = {term: ''};
    private weather:Weather=<Weather>{};
    constructor(private _weatherService:WeatherService) {
        //should be moved to ngOnInit lifecycle hook
    }

    private data:Object = {};
    private errorMessage:any = '';

    getData() {
        this._weatherService.getData(this.search.term)
            .subscribe(
                data => {
                    this.weather.name = data.name;
                    this.weather.country = data.sys.country;
                    this.weather.data= <any>{};
                    this.weather.data.wind = data.wind.speed;
                    this.weather.data.sunrise = data.sys.sunrise;
                    this.weather.data.sunset = data.sys.sunset;
                    this.weather.data.pressure = data.main.pressure;
                    this.weather.data.humidity = data.main.humidity;

            },
                error => this.errorMessage = <any>error
        );
    }

}