import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AccountModel } from "src/app/share/share-models/account.model";
import { AccountService } from "src/app/share/share-services/account.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent {

  username!: string;
  email!: string;
  password!: string;
  conPassword!: string;

  listAcc!: AccountModel[];

  constructor(
    private router: Router,
    private accSrv: AccountService
    ) {
    this.listAcc = this.accSrv.listAccount;
  }

  public navigate(url: string) {
    this.router.navigate([url]);
  }

  public signup() {
    if(!this.username || !this.email || !this.password || !this.conPassword) {
      alert('Hãy nhập đầy đủ thông tin!')
    }
    else {
      let acc = this.listAcc.find((ele: any) => ele['username'] === this.username);
      if(acc) {
        alert('Username này đã tồn tại!');
      }
      else if(this.password !== this.conPassword) {
        alert('Mật khẩu xác nhận sai!')
      }
      else {
        let newAcc: AccountModel = {
          userId: Math.floor(Math.random() * 10).toString(),
          username: this.username,
          password: this.password
        };
        this.listAcc.push(newAcc);
        this.accSrv.setListAcc(this.listAcc);
        alert('Đăng ký thành công!');
        this.router.navigate(['login']);
      }
    }
  }
}
