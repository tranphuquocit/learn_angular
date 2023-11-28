import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public baCach: any;
  userInfoList = [];
  userInfoFunc(userInfo: any) {
    // console.log(userInfo);
    this.userInfoList = userInfo;
    // console.log(this.userInfoList);
  }
}
