import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  progress: number = 0;

  constructor() {
  }

  autpProgress() {
    const timeOut = setTimeout(() => {
      this.progress = this.progress + 5;
      if(this.progress > 100) {
        // clearTimeout(timeOut);
        // return;
        this.progress = 0;
      }
      this.autpProgress();
    }, 500)
  }

  download() {
    this.autpProgress();

  }
  }
