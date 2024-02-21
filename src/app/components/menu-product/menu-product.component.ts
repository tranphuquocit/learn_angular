import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu-product',
  templateUrl: './menu-product.component.html',
  styleUrls: ['./menu-product.component.scss']
})

export class MenuProductComponent {

  constructor(private router: Router) {
  }

  public navigate() {
    this.router.navigate(['product/detail']);
  }
}
