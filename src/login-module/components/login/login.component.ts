import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AccountModel } from "src/login-module/models/account.model";
import { AccountService } from "src/share-services/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  listAccount!: any[];

  username!: any;
  password!: any;
  accLogin: AccountModel = {};

  currentUrl!: string;

  constructor(
    private accSrv: AccountService,
    private router: Router
    ) {
    if(this.accSrv.listAccount && this.accSrv.listAccount.length > 0) {
      this.listAccount = this.accSrv.listAccount;
    }
    this.currentUrl = this.accSrv.currentUrl;
  }

  public login() {
    if(this.listAccount && this.listAccount.length > 0) {
      this.listAccount.forEach((ele: any) => {
        if((ele['username'] === this.username)) {
          if(ele['password'] === this.password) {
            this.accSrv.setIsLogin(true);
            this.accSrv.setAccLogin(ele);
            this.router.navigate([this.currentUrl]);
            return;
          }
          else {
            alert('Sai mật khẩu!')
          }
        }
      });
    }
  }
}
