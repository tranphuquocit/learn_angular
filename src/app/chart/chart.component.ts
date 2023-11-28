import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})

export class ChartCompoennt {
    chartNoteList = [
        {
            id: 10,
            name: '1-10',
            color: 'red',
            progress: 0
        },
        {
            id: 20,
            name: '11-20',
            color: 'green',
            progress: 0

        },
        {
            id: 30,
            name: '21-30',
            color: 'pink',
            progress: 0

        },
        {
            id: 40,
            name: '31-40',
            color: 'blue',
            progress: 0

        },
        {
            id: 50,
            name: '41-50',
            color: 'yellow',
            progress: 0

        },
        {
            id: 60,
            name: '60+',
            color: 'grey',
            progress: 0
        },
    ];
    totalUser: number = 0 ;
    _progress: string = '0';
    @Input() userInfoList!: any[];
    @Input()
    get progress(): string {
       return this._progress;
    }

    set progress(value: any) {
        // for(let itemUser of this.userInfoList) {
        //     if(itemUser.age >= 1 && itemUser.age <= 10) {
        //         for(let itemChart of this.chartNoteList) {
        //             if(itemChart.id == 10) {
        //                 itemChart.progress = itemChart.progress + 1;
        //                 this.totalUser++;
        //                 this.progress1 = 100*itemChart.progress/this.totalUser + 'px';
        //             }
        //         }
        //     }
        //     else if(itemUser.age > 10 && itemUser.age <=20) {
        //         for(let itemChart of this.chartNoteList) {
        //             if(itemChart.id == 20) {
        //                 itemChart.progress = itemChart.progress + 1;
        //                 this.totalUser++;
        //                 this.progress1 = 100*itemChart.progress/this.totalUser + 'px';
        //             }
        //         }
        //     }
        this._progress = '70px';
        }
    

    constructor() {
        console.log(this.userInfoList);
    }

    ngOnInit() {}
}