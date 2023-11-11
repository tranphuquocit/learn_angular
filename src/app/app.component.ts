import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public progress: number = 10;
  constructor() {}

  ngOnInit() {
    // this.setTime();
  }

  setTime() {
    const plusProgress = setTimeout(() => {
      this.progress = this.progress + 10;
      if(this.progress === 100) {
        clearTimeout(plusProgress);
        return;
      }
      this.setTime();
    },1000);
  }
}
