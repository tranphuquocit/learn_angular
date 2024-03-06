import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AccountModel } from "src/share-models/account.model";
import { AccountService } from "src/share-services/account.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {

  isLogin!: boolean;

  accLogin!: AccountModel;

  constructor(
    private router: Router,
    private accSrv: AccountService
    ) {
      this.isLogin = this.accSrv.isLogin;
      this.accLogin = this.accSrv.accLogin;
    }
  public navigate(url: string) {
    this.router.navigate([url]);
  }

  public logout() {
    this.accSrv.setCurUrl('');
    this.accSrv.setIsLogin(false);
    this.router.navigate(['login']);
  }

  public cart() {
    if(!this.accLogin) {
      this.router.navigate(['login']);
      this.accSrv.setCurUrl('cart');
    }
    else {
      this.router.navigate(['cart']);
    }
  }
}
