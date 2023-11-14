import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-input-color',
    templateUrl: './input-color.component.html',
    styleUrls: ['./input-color.component.scss']
})

export class InputColorComponent{
    @Input() boxColor1!: string;
    @Input() boxColor2!: string;
    @Input() boxColor3!: string;
    @Input() boxColor4!: string;
    @Input() boxColor5!: string;
    @Input() boxColor6!: string;
    bgColor1!: string;
    progressNumber!: number;
    arrayColor = [this.boxColor1, this.boxColor2, this.boxColor3, this.boxColor4, this.boxColor5, this.boxColor6]

    @Input() 
    get progress(): number {
        return this.progressNumber;
    }

    set progress(value: number) {
        if(typeof value !== 'number') {
            const valueNumber = Number(value);
            if(Number.isNaN(valueNumber)) {
                this.progressNumber = 0;
            }
            else {
                this.progressNumber = valueNumber;
            }
        }
        else {
            this.progressNumber = value;
        }
    }

    @Input()
    get bgColor(): string {
        return this.bgColor1;
    }

    set bgColor(color: string) {
        this.bgColor1 = color;
    }

    colorFunc(progressNumber: number): string {
        if(this.progressNumber < 15) {
            return this.boxColor1;
        }
        else if(this.progressNumber < 30) {
            return this.boxColor2;
        }
        else if(this.progressNumber < 45) {
            return this.boxColor3;
        }
        else if(this.progressNumber < 65) {
            return this.boxColor4;
        }
        else if(this.progressNumber < 80) {
            return this.boxColor5;
        }
        else {
            return this.boxColor6;
        }
    }
}