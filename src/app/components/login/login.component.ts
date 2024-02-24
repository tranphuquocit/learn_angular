import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AccountModel } from "src/app/models/account.model";
import { AccountService } from "src/app/services/account.service";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  username!: string;
  password!: string;
  listAccount: AccountModel[] = [];
  currentUrl: string = '';

  constructor(
    private router: Router,
    private service: AccountService,
    private accService: AccountService)
    {
      this.listAccount = this.service.listAccount;
      // console.log(this.listAccount)
      this.accService.getCurUrl().subscribe(curUrl => this.currentUrl = curUrl);
  }
  public navigate(url: string) {
    this.router.navigate([url]);
  }

  public login() {
    let isLogin: boolean = false;
    this.listAccount.forEach(item => {
      if(item.username === this.username && item.password === this.password) {
        isLogin = true;
        this.service.setAccLogin(item);
      }
    });
    this.service.setIsLogin(isLogin);
    if(isLogin) {
      this.router.navigate([this.currentUrl]);
    }
    else {
      alert('Sai thông tin đăng nhập!')
    }
  }
}
