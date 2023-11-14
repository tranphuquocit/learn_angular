import { Component, Input, SimpleChange } from "@angular/core";

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent {
    @Input() bgColor!: string;
    @Input() progressColor!: string;
    
    progressNumber: number = 0;
    @Input() 
    get progress(): number {
        return this.progressNumber
    }

    set progress(value: number) {
        if(typeof value !== 'number') {
            const a = Number(value);
            if(Number.isNaN(a)) {
                this.progressNumber = 0;
            }
            else {
                this.progressNumber = a;
            }
        }
        else {
            this.progressNumber = value;
        }
    }

    myFunc(proNumber: number) :string{
        if(proNumber < 15)  {
            return 'red';
        }
        else if(proNumber < 40 && proNumber > 15) {
            return 'green';
        }
        else if(proNumber > 40 && proNumber < 60) {
            return 'yellow'
        }
        else {
            return 'blue';
        }
    }
}