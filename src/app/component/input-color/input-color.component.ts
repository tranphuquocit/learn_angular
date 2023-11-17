import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";

@Component({
    selector: 'app-input-color',
    templateUrl: './input-color.component.html',
    styleUrls: ['./input-color.component.scss']
})

export class InputColorComponent implements OnInit {

    // Khai bao
    @Input() boxColor!: string;
    @Output() outputColor = new EventEmitter<any>();
    arrayColor: string[] = [];
    show: boolean = true;
    constructor() {}
    ngOnInit(): void {
        // console.log(this.index, this.boxColor);
        console.log(this.arrayColor);

    }
    // Function
    addInputColor() {
        if(this.arrayColor.length < 5) {
            this.arrayColor.push(this.boxColor);
            this.boxColor = '';
            if(this.arrayColor.length == 5) {
                this.show = false;
                alert('Bạn đã nhập đủ màu!')
            }
        }
        else {
            this.show = false;
        }
        this.outputColor.emit(this.arrayColor);
    }
}