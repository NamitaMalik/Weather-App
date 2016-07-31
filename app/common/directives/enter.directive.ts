/**
 * Created by namita on 7/31/16.
 */

import {Directive, Output} from "@angular/core";
import {EventEmitter} from "@angular/common/src/facade/async";

@Directive({
    selector: '[enter]',
    host: {
        '(keypress)': 'enterHandler($event)'
    }
})
export class EnterDirective {
    @Output() enter = new EventEmitter<any>();

    constructor() {
    }

    enterHandler(event) {
        if (event.keyCode == 13) {
            this.enter.emit(event);
        }
    }
}