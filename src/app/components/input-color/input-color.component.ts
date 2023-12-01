import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-input-color',
    templateUrl: './input-color.component.html',
    styleUrls: ['./input-color.component.scss']
})

export class InputColorComponent{

    @Output() _listColor = new EventEmitter<any>();
    listColor = {
        color1: null,
        color2: null,
        color3: null,
        color4: null,
        color5: null,
        color6: null,
    }
        
    constructor() {}
    ngOnInit() {}

    saveListColor() {
        this._listColor.emit(this.listColor);
        alert("Success");
    }
}