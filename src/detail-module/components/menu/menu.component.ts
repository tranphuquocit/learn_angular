import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountModel } from "src/login-module/models/account.model";
import { AccountService } from "src/share-services/account.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {

  isLogin!: boolean;

  accLogin!: AccountModel;

  currentUrl!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accSrv: AccountService
    ) {
      this.isLogin = this.accSrv.isLogin;
      this.accLogin = this.accSrv.accLogin;
    }

  public navigate(url: string) {
    this.accSrv.setCurUrl(`detail/${this.getParamUrl()['name']}/${this.getParamUrl()['id']}`)
    this.router.navigate([url]);
  }

  private getParamUrl() {
    let id = this.route.snapshot.params['id'];
    let type = this.route.snapshot.params['name'];
    return {
      id: id,
      name: type
    }
  }

  public logout() {
    this.accSrv.setCurUrl('');
    this.router.navigate(['login']);
  }
}
