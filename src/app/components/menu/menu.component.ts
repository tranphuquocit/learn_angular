import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AccountModel } from "src/app/models/account.model";
import { AccountService } from "src/app/services/account.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {

  isLogin: boolean = false;
  accLogin: AccountModel = {};

  constructor(
    private router: Router,
    private service: AccountService
    ) {
    this.service.getIsLogin().subscribe(isLogin => this.isLogin = isLogin);
    this.service.getAccLogin().subscribe(acc => this.accLogin = acc);
  }

  public navigate(url: string) {
    this.router.navigate([url]);
  }

  public logout() {
    this.router.navigate(['']);
    this.service.setIsLogin(false);
  }
}
