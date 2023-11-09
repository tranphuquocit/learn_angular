import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Output() ketqua = new EventEmitter<number>();

  title = '';
  phepTinhNhan = '';
  output = 0;
  showCalculator = false;
  showUser = false;

  clickFunc(event: any) {
    this.title += `${event} `;
    console.log(this.title);
  }

  clickTinhToan(oper: any) {
    this.phepTinhNhan += `${oper}`;

    // ham tinh output
    // this.output = eval(this.phepTinhNhan);
    // console.log(this.output);

    // this.phepTinhNhan = this.output.toString();
  }

  bang() {
    this.output = eval(this.phepTinhNhan);  
    this.phepTinhNhan = this.output.toString();
  }
  
  delete() {
    this.phepTinhNhan.slice(0, -1);
    console.log(this.phepTinhNhan);
  }

  clear() {
    this.phepTinhNhan = '';
    console.log(this.phepTinhNhan); 
  }

  showCal() {
    this.showCalculator = !this.showCalculator;
    console.log(this.showCalculator);
  }

  showUserr() {
    this.showUser = !this.showUser;
    console.log(this.showUser);

  }
}
