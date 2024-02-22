import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ProductModel } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'app-menu-product',
  templateUrl: './menu-product.component.html',
  styleUrls: ['./menu-product.component.scss']
})

export class MenuProductComponent {

  public typeProduct!: string;
  public listProduct: ProductModel[] = this.service.listPhone;

  constructor(
    private router: Router,
    private service: ProductService
    ) {
    // console.log(this.service.listLaptop);
  }

  public showTypeProduct(typeProduct: string) {
    this.typeProduct = typeProduct;
    switch(this.typeProduct) {
      case 'phone': {
        this.listProduct = this.service.listPhone;
        break;
      }
      case 'laptop': {
        this.listProduct = this.service.listLaptop;
        break;
      }
      case 'watch': {
        this.listProduct = this.service.listWatch;
        break;
      }
      case 'tablet': {
        this.listProduct = this.service.listTablet;
        break;
      }
      default: this.listProduct = this.service.listPhone;
    }
    // console.log(this.listProduct);
  }
}
