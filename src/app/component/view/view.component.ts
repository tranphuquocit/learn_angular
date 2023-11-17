import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {

    @Input() progress!: number;
    // Khai bao
    background!: string;
    progressNumber!: number;
    arrayInput: string[] = [];

    constructor() {}
    ngOnInit(): void {
        
    }
    // Function
    setColor(event: any) {
        this.arrayInput = event;
        console.log(this.arrayInput)
    }

    x() {
        console.log(this.arrayInput);
    }

    colorFunc() {
        if(this.progress < 20) {
            return this.arrayInput[0];
        }
        else if(this.progress < 40) {
            return this.arrayInput[1];
        }
        else if(this.progress < 60) {
            return this.arrayInput[2];
        }
        else if(this.progress < 80) {
            return this.arrayInput[3];
        }
        else {
            return this.arrayInput[4];
        }
    }
}