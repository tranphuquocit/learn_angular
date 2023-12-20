import { Injectable } from "@angular/core";
import { UserInfoModel } from "../model/user-info.model";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ShareService {

  private userInfo = new BehaviorSubject<UserInfoModel[]>([]);
  private actionUserInfo = new BehaviorSubject<{id: number, statusAction: string}>({id: 0, statusAction: ''});
  
  constructor() { }
  ngOnInit() { }

  public getUserInfo(): Observable<UserInfoModel[]> {
    return this.userInfo.asObservable();
  }

  public setUserInfo(userInfo: UserInfoModel[]) {
    this.userInfo.next(userInfo);
  }

  public getIdUserInfo(): Observable<{id: number, statusAction: string}> {
    return this.actionUserInfo.asObservable();
  }

  public setIdUserInfo(id: number, statusAction: string = '') {
    const body = {
      id: id,
      statusAction: statusAction
    }
    this.actionUserInfo.next(body);
  }
}