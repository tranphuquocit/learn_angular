import { Component } from "@angular/core";
import { ShareService } from "../ShareService/ShareService.component";

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
})

export class ChartComponent {

    varFromSrv: string = '';

    constructor(private shareService: ShareService) {}
    ngOnInit() {
        this.shareService.getDataService().subscribe(data => {
            this.varFromSrv = data;
        })
    }
    
}