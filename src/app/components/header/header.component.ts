import { Component, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material/menu";
import { Router } from "@angular/router";
import { AccountModel } from "src/app/share/share-models/account.model";
import { CartItem } from "src/app/share/share-models/cart-item.model";
import { AccountService } from "src/app/share/share-services/account.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  isLogin!: boolean;

  accLogin!: AccountModel;

  listProductOnCart: CartItem[] = [];

  quantityOnCart: number = 0;

  constructor(
    private router: Router,
    private accSrv: AccountService
    ) {
      this.isLogin = this.accSrv.isLogin;
      this.accLogin = this.accSrv.accLogin;

      if(!this.isLogin) {
        if(localStorage.getItem('guess')) {
          this.listProductOnCart = JSON.parse(`${localStorage.getItem('guess')}`);
          this.countCart();
        }
      }
      else {
        if(localStorage.getItem(`${this.accLogin.userId}`)) {
          this.listProductOnCart = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);
          this.countCart();
        }
      }
    }

    public navigate(url: string) {
      this.router.navigate([url]);
    }

    public logout() {
      this.accSrv.setCurUrl('');
      this.accSrv.setIsLogin(false);
      this.accSrv.setAccLogin(null);
      localStorage.setItem('guess', JSON.stringify([]));
      this.router.navigate(['login']);
    }

    private countCart() {
      this.listProductOnCart.forEach((ele: any) => {
        this.quantityOnCart += ele['quantity'];
      })
    }

    public openMenu() {
      this.trigger.openMenu();
    }
}
