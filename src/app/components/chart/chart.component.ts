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
  public chartList: ChartListModel[] = [
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
  ];
  public userInfoList: UserInfoModel[] = [];

  constructor(private shareService: ShareService) {
    this.shareService.getUserInfo()
    .subscribe(res => {
      if (res && res.length > 0) {
        this.userInfoList = res;
        this.renderChart();
      }
    })
  }
  ngOnInit() { }

  renderChart() {
    this.chartList.forEach(ele => {
      switch (ele.name) {
        case '1-10': {
          this.calcPercent(ele, 0);
          break;
        }
        case '11-20': {
          this.calcPercent(ele, 10);
          break;
        }
        case '21-30': {
          this.calcPercent(ele, 20);
          break;
        }
        case '31-40': {
          this.calcPercent(ele, 30);
          break;
        }
        case '41-50': {
          this.calcPercent(ele, 40);
          break;
        }
        case '51+': {
          this.calcPercent(ele, 50);
          break;
        }
      }
    });
  }

  // Function tính toán percent cho chart, nhận vào 1 element chartlist và con số tuổi.
  private calcPercent(ele: ChartListModel, idx: number) {
    const count = this.userInfoList.filter(ele => ele.age > (0+idx) && ele.age <= (10+idx)).length || 0;
    ele.percent = count/this.userInfoList.length*300 + 'px';
  }
}