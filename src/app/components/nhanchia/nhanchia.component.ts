import { Component } from "@angular/core";
import { SaveResultService } from "src/app/services/saveResultSrv.service";

@Component({
  selector: 'app-nhan-chia',
  templateUrl: './nhanchia.component.html',
  styleUrls: ['./nhanchia.component.scss']
})

export class NhanChiaComponent {

  public soA: any = 0;
  public soB: number = 0;
  public result: number = 0;
  public resultFromCongTru: number = 0;

  constructor(private service: SaveResultService) {}

  public tinh(param: string) {
    if(param === 'nhan') {
      this.result = this.soA * this.soB;
    }
    else {
      this.result = this.soA / this.soB;

    }
  }

  public ganKetQua(param: string) {
    this.service.getResult().subscribe(result => this.resultFromCongTru = result);
    // console.log(this.resultFromCongTru);
    if(param === 'a') {
      this.soA = this.resultFromCongTru;
    } else if(param === 'b') {
      this.soB = this.resultFromCongTru;
    } else {
      this.soA = 0;
      this.soB = 0;
    }
  }
}
