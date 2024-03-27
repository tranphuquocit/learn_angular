import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent {

  constructor(private router: Router) {}
  public navigate(url: string) {
    this.router.navigate([url]);
  }
}
