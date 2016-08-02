/**
 * Created by namita on 7/31/16.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'temperature'})
export class TemperaturePipe implements PipeTransform {
    transform(inputValue:any):string {
        return inputValue ? (parseInt(inputValue - 273.15 + '') + '\xB0 C') : '';
    }
}