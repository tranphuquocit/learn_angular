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
  // countClick: number = 0;
  // listTimeClick: string[] = [];
  // countHover: number = 0;
  // listTimeHover: string[] = [];

  infoCount: InfoClick = {
    count: 0,
    listTimeClick: []
  }

  infoHover: InfoHover = {
    count: 0,
    listTimeHover: []
  }

  timeClick: string = '';
  timeHover: string = '';

  constructor(private localStorage: LocalStorageService) {}

  public click() {
    const currentTime = Date().split(' ')[4];
    this.localStorage.saveData('timeClick', currentTime);
  }

  public hover() {
    const currentTime = Date().split(' ')[4];
    this.localStorage.saveData('timeHover', currentTime);
  }

  public reset() {
    this.localStorage.removeData('timeClick');
    this.localStorage.removeData('timeHover');
  }

}
