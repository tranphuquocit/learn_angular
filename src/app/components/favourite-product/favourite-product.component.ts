import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-favourite-product',
  templateUrl: './favourite-product.component.html',
  styleUrls: ['./favourite-product.component.scss']
})

export class FavouriteProduct {

  constructor(private router: Router) {
  }

  public navigate() {
    this.router.navigate(['product/detail']);
  }
}
