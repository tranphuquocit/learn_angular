import { Component} from "@angular/core";


@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})

export class ChartComponent {

    totalUser = 0;
    chartList = [
        {
            name: '1-10',
            color: 'red',
            count: 0,
            percent: ''
        },
        {
            name: '11-20',
            color: 'yellow',
            count: 0,
            percent: ''
        },
        {
            name: '21-30',
            color: 'green',
            count: 0,
            percent: ''
        },
        {
            name: '31-40',
            color: 'blue',
            count: 0,
            percent: ''
        },
        {
            name: '41-50',
            color: 'pink',
            count: 0,
            percent: ''
        },
        {
            name: '51+',
            color: 'grey',
            count: 0,
            percent: ''
        }
    ]

    userInfoList: Array<any> = []; //name, age, sex
            // chartList: name, color, percent

    constructor() {}
    ngOnInit() {}

    receiveUserInfoList(event: any) {
        this.userInfoList = event;
        // console.log(this.arr);
        this.totalUser = this.userInfoList.length;
        console.log(this.totalUser);

        for(let item of this.chartList) {
            item.count = 0;
        }

        for(let itemInfoList of this.userInfoList) {
            for(let itemChartList of this.chartList) {
                if(itemInfoList.age > 1 && itemInfoList.age <= 10) {
                    if(itemChartList.name == '1-10') {
                        itemChartList.count = (itemChartList.count + 1);
                    }
                }
                else if(itemInfoList.age > 10 && itemInfoList.age <= 20) {
                    if(itemChartList.name == '11-20') {
                        itemChartList.count = (itemChartList.count + 1);
                    }
                }
                else if(itemInfoList.age > 20 && itemInfoList.age <= 30) {
                    if(itemChartList.name == '21-30') {
                        itemChartList.count = (itemChartList.count + 1);
                    }
                }
                else if(itemInfoList.age > 30 && itemInfoList.age <= 40) {
                    if(itemChartList.name == '31-40') {
                        itemChartList.count = (itemChartList.count + 1);
                    }
                }
                else if(itemInfoList.age > 40 && itemInfoList.age <= 50) {
                    if(itemChartList.name == '41-50') {
                        itemChartList.count = (itemChartList.count + 1);
                    }
                }
                else if(itemInfoList.age > 50) {
                    if(itemChartList.name == '51+') {
                        itemChartList.count = (itemChartList.count + 1);
                    }
                }
            }
        }

        for(let item of this.chartList) {
            item.percent = item.count/this.totalUser*300 + 'px';
            console.log(item.percent)
        }
        
    }
}