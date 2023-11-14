import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  progress: number = 0;

  timeFunc() {
    console.log(this.progress);
    const timeOut = setTimeout(() => {
      this.progress = this.progress + 5;
      if(this.progress == 100) {
        clearTimeout(timeOut);
        return;
      }
      this.timeFunc();

    }, 500)
  }
}
