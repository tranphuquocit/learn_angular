import { Injectable } from "@angular/core";
import { InfoClick } from "./info-click.model";
import { InfoHover } from "./info-click.model";
import { BehaviorSubject, Observable, count } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  // private infoClick: BehaviorSubject<InfoClick> = new BehaviorSubject<InfoClick>({
  //   count: 0,
  //   listTimeClick: []
  // });

  // private infoHover: BehaviorSubject<InfoHover> = new BehaviorSubject<InfoHover>({
  //   count: 0,
  //   listTimeHover: []
  // });

  constructor() { }

  // public getInfoClick(): Observable<InfoClick> {
  //   return this.infoClick.asObservable();
  // }

  // public setInfoClick(timeClick: string) {
  //   this.infoClick.next()
  //   this.infoClick.listTimeClick.unshift(timeClick);
  // }

  // public getInfoHover(): Observable<InfoHover> {
  //   return this.infoHover.asObservable();
  // }

  // public setInfoHover(timeHover: string) {
  //   this.infoHover.count += 1;
  //   this.infoHover.listTimeHover.unshift(timeHover);
  // }

  // public resetInfo() {
  //   this.infoClick= {
  //     count: 0,
  //     listTimeClick: []
  //   };
  //   this.infoHover= {
  //     count: 0,
  //     listTimeHover: []
  //   };
  // }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
