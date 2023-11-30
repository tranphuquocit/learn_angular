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
            count: 0,
            percent: ''
        },
        {
            id: 20,
            name: '11-20',
            color: 'green',
            count: 0,
            percent: ''

        },
        {
            id: 30,
            name: '21-30',
            color: 'pink',
            count: 0,
            percent: ''

        },
        {
            id: 40,
            name: '31-40',
            color: 'blue',
            count: 0,
            percent: ''

        },
        {
            id: 50,
            name: '41-50',
            color: 'yellow',
            count: 0,
            percent: ''

        },
        {
            id: 51,
            name: '60+',
            color: 'grey',
            count: 0,
            percent: ''
        },
    ];
    totalUser: number = 0 ;
    @Input() userInfoList: Array<any> = [];
    
    constructor() {}

    ngOnInit() {}

    showChart() {
        // console.log(this.userInfoList);
        this.totalUser = this.userInfoList.length;

        for(let item of this.chartNoteList) {
            item.count = 0;
        }

        for(let itemUserInfo of this.userInfoList) {
            for(let itemChartNote of this.chartNoteList) {
                if(Number(itemUserInfo.age) > 1 && Number(itemUserInfo.age) <= 10) {
                    if(itemChartNote.id == 10) {
                        itemChartNote.count = itemChartNote.count + 1;
                        // console.log(itemChartNote.count)
                    }
                }
                else if (Number(itemUserInfo.age) > 10 && Number(itemUserInfo.age) <= 20) {
                    if(itemChartNote.id == 20) {
                        itemChartNote.count = itemChartNote.count + 1;
                        console.log(itemChartNote.count)

                    }
                }
                else if (Number(itemUserInfo.age) > 20 && Number(itemUserInfo.age) <= 30) {
                    if(itemChartNote.id == 30) {
                        itemChartNote.count = itemChartNote.count + 1;
                    }
                }
                else if (Number(itemUserInfo.age) > 30 && Number(itemUserInfo.age) <= 40) {
                    if(itemChartNote.id == 40) {
                        itemChartNote.count = itemChartNote.count + 1;
                    }
                }
                else if (Number(itemUserInfo.age) > 40 && Number(itemUserInfo.age) <= 50) {
                    if(itemChartNote.id == 50) {
                        itemChartNote.count = itemChartNote.count + 1;
                    }
                }
                else if (Number(itemUserInfo.age) > 50) {
                    if(itemChartNote.id == 51) {
                        itemChartNote.count = itemChartNote.count + 1;
                    }
                }
            }
        }

        for(let item of this.chartNoteList) {
            item.percent = item.count/this.totalUser*200 + 'px';
            // console.log(item.count);
        }
    }

}
        
