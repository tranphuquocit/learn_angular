import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'app-favourite-product',
  templateUrl: './favourite-product.component.html',
  styleUrls: ['./favourite-product.component.scss']
})

export class FavouriteProduct {

  listPhone: any[] = [];
  listLaptop: any[] = [];
  listTablet: any[] = [];
  listWatch: any[] = [];

  listTongHop: any[] = [];
  favouriteList: any[] = [];

  constructor(private router: Router, private productService: ProductService) {
    this.listPhone = this.productService.listPhone;
    this.listLaptop = this.productService.listLaptop;
    this.listTablet = this.productService.listTablet;
    this.listWatch = this.productService.listWatch;

    this.listTongHop = [...this.listTongHop, ...this.listPhone, ...this.listLaptop, ...this.listTablet, ...this.listWatch];
    // console.group(this.listTongHop);
  }

  ngOnInit() {
    if(this.listTongHop && this.listTongHop.length > 0) {
      this.listTongHop.forEach((ele: any) => {
        if(ele['like'] >= 2) {
          this.favouriteList.push(ele);
        }
      })
    }
    // console.log(this.favouriteList);
  }

  public navigate() {
    this.router.navigate(['product/detail']);
  }
}
