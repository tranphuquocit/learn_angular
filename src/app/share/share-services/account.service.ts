import { Injectable } from "@angular/core";
import { AccountModel } from "src/app/share/share-models/account.model";

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  public listAccount = [
    {
      userId: '1',
      username: 'user1',
      password: '1'
    },
    {
      userId: '2',
      username: 'user2',
      password: '2'
    },
    {
      userId: '3',
      username: 'user3',
      password: '3'
    },
    {
      userId: '4',
      username: 'user4',
      password: '4'
    },
    {
      userId: '5',
      username: 'user5',
      password: '5'
    }
  ]

  isLogin: boolean = false;

  accLogin!: AccountModel;

  currentUrl: string = '';

  public getIsLogin(): boolean {
    return this.isLogin;
  }

  public setIsLogin(isLogin: boolean) {
    this.isLogin = isLogin;
  }

  public getAccLogin(): any {
    return this.accLogin;
  }

  public setAccLogin(accLogin: any) {
    this.accLogin = accLogin;
  }

  public getCurUrl(): string{
    return this.currentUrl;
  }

  public setCurUrl(curUrl: string) {
    this.currentUrl = curUrl;
  }

  public setListAcc(listAcc: any[]) {
    this.listAccount = listAcc;
  }
}
