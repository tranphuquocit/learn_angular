import { Component } from "@angular/core";
import { UserInfoModel } from './../../model/user-info.model';
import { ShareService } from "src/app/service/shareService.service";
import { ChartListModel } from "src/app/model/chart-list.model";

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})

export class ChartComponent {
    public chartList: ChartListModel[] = [];
    public userInfoList: UserInfoModel[] = [];

    constructor(private shareService: ShareService) {}
    ngOnInit() {
        this.shareService.getUserInfoList().subscribe(data => {
            this.userInfoList = data;
        })
        this.shareService.getChartList().subscribe(data => {
            this.chartList = data;
        })

        
        // console.log(this.chartList);
    }

    // public showChart() {
    //     for(let item of this.chartList) {
    //         item.count = 0;
    //     }

    //     for(let itemInfoList of this.userInfoList) {
    //         for(let itemChartList of this.chartList) {
    //             if(itemInfoList.age >= 1 && itemInfoList.age <= 10) {
    //                 if(itemChartList.name === '1-10') {
    //                     itemChartList.count = (itemChartList.count + 1);
    //                 }
    //             }
    //             else if(itemInfoList.age > 10 && itemInfoList.age <= 20) {
    //                 if(itemChartList.name === '11-20') {
    //                     itemChartList.count = (itemChartList.count + 1);
    //                 }
    //             }
    //             else if(itemInfoList.age > 20 && itemInfoList.age <= 30) {
    //                 if(itemChartList.name === '21-30') {
    //                     itemChartList.count = (itemChartList.count + 1);
    //                 }
    //             }
    //             else if(itemInfoList.age > 30 && itemInfoList.age <= 40) {
    //                 if(itemChartList.name === '31-40') {
    //                     itemChartList.count = (itemChartList.count + 1);
    //                 }
    //             }
    //             else if(itemInfoList.age > 40 && itemInfoList.age <= 50) {
    //                 if(itemChartList.name === '41-50') {
    //                     itemChartList.count = (itemChartList.count + 1);
    //                 }
    //             }
    //             else if(itemInfoList.age > 50) {
    //                 if(itemChartList.name === '51+') {
    //                     itemChartList.count = (itemChartList.count + 1);
    //                 }
    //             }
    //         }
    //     }

    //     for(let item of this.chartList) {
    //         item.percent = item.count/this.userInfoList.length*300 + 'px';
    //         // console.log(item.percent)
    //     }
        
    // }
}