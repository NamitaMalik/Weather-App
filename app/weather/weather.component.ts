/**
 * Created by namita on 7/30/16.
 */

import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {WeatherService} from './weather-service';


@Component({
    template: `
    <div>
        <h2>Weather Component</h2>
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [WeatherService]
})

export class WeatherComponent {
}