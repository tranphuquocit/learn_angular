import { Component } from "@angular/core";
import { ShareService } from "../shareService/shareService.component";

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
})

export class ChartComponent {

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

    userInfoList = this.shareService.getData();

    constructor(private shareService: ShareService) {}
    ngOnInit() {}
    
}