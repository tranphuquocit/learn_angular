import { Component } from "@angular/core";
import { ProductService } from "src/share-services/product.service";

@Component({
  selector: 'app-menu-product',
  templateUrl: './menu-product.component.html',
  styleUrls: ['./menu-product.component.scss']
})

export class MenuProductComponent {

  listProduct!: any[];

  constructor(private proSrv: ProductService) {
    this.listProduct = this.proSrv.listPhone;
  }

  public chooseTypeProduct(type: string) {
    switch(type) {
      case 'phone': {
        this.listProduct = this.proSrv.listPhone;
        break;
      }
      case 'laptop': {
        this.listProduct = this.proSrv.listLaptop;
        break;
      }
      case 'tablet': {
        this.listProduct = this.proSrv.listTablet;
        break;
      }
      case 'watch': {
        this.listProduct = this.proSrv.listWatch;
        break;
      }
    }
  }
}
