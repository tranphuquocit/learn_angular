import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AccountModel } from "../models/account.model";

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  public listAccount = [
    {
      username: 'user1',
      password: '1'
    },
    {
      username: 'user2',
      password: '2'
    },
    {
      username: 'user3',
      password: '3'
    },
    {
      username: 'user4',
      password: '4'
    },
    {
      username: 'user5',
      password: '5'
    }
  ]

  isLogin = new BehaviorSubject<boolean>(false);

  accLogin = new BehaviorSubject<AccountModel>({});

  currentUrl = new BehaviorSubject<string>('');

  public getIsLogin(): Observable<boolean> {
    return this.isLogin.asObservable();
  }

  public setIsLogin(isLogin: boolean) {
    this.isLogin.next(isLogin);
  }

  public getAccLogin(): Observable<AccountModel> {
    return this.accLogin.asObservable();
  }

  public setAccLogin(accLogin: AccountModel) {
    this.accLogin.next(accLogin);
  }

  public getCurUrl(): Observable<string> {
    return this.currentUrl.asObservable();
  }

  public setCurUrl(curUrl: string) {
    this.currentUrl.next(curUrl);
  }
}
