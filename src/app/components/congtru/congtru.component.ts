import { Component } from "@angular/core";
import { SaveResultService } from "src/app/services/saveResultSrv.service";

@Component({
  selector: 'app-cong-tru',
  templateUrl: './congtru.component.html',
  styleUrls: ['./congtru.component.scss']
})

export class CongTruComponent {
  public soA: number = 0;
  public soB: number = 0;
  public result: any = 0;

  constructor(private service: SaveResultService) {}

  public tinh(param: string) {
    if(param === 'cong') {
      this.result = this.soA + this.soB;
    }
    else {
      this.result = this.soA - this.soB;

    }
  }

  public saveResult() {
    // localStorage.setItem('result', this.result);
    this.service.setResult(this.result);
  }

}
