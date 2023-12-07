import { Component} from "@angular/core";


@Component({
    selector: 'app-input-chart',
    templateUrl: './input-chart.component.html',
    styleUrls: ['./input-chart.component.scss']
})

export class InputChartComponent {

    public chartList = [
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

    public userInfo = {
        name: null,
        age: null,
        sex: null,
        phone: null,
        address: null
    }

    public userInfoList: any = [];
    public totalUser: number = 0;

    constructor() {}
    ngOninit() {}

    public saveUserInfo() {
        if(!this.userInfo.name || !this.userInfo.age) {
            alert("Thông tin bạn nhập chưa hợp lệ!")
        } 
        else {
            this.userInfoList.push(this.userInfo);
            this.totalUser = this.userInfoList.length;
            console.log(this.userInfoList)
            this.userInfo = {
            name: null,
            age: null,
            sex: null,
            phone: null,
            address: null
        }
        }

        //chart
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