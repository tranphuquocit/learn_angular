import { Component, EventEmitter, Output } from '@angular/core';
import { InfoClick } from './info-click.model';
import { InfoHover } from './info-click.model';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countClick: number = 0;
  listTimeClick: string[] = [];
  countHover: number = 0;
  listTimeHover: string[] = [];

  constructor(private localStorage: LocalStorageService) {}

  public click() {
    this.countClick += 1;
    const currentTime = Date().split(' ')[4];
    this.listTimeClick.unshift(currentTime);
    // console.log(currentTime);
    this.localStorage.saveData('countClick', this.countClick.toString());
    this.localStorage.saveData('listTimeClick', this.listTimeClick.join(', '));
    // const x = this.localStorage.getData('listTimeClick')
    // console.log(x)
  }

  public hover() {
    this.countHover += 1;
    const currentTime = Date().split(' ')[4];
    this.listTimeHover.unshift(currentTime);
    this.localStorage.saveData('countHover', this.countHover.toString());
    this.localStorage.saveData('listTimeHover', this.listTimeHover.join(', '));
  }

  public resetCountClick() {
    this.localStorage.clearData();
  }

}
