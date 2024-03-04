import { Component } from "@angular/core";
import { ProductService } from "src/share-services/product.service";

@Component({
  selector: 'app-favourite-product',
  templateUrl: './favourite-product.component.html',
  styleUrls: ['./favourite-product.component.scss']
})

export class FavouriteProductComponent {

  listProduct: any[] = [];

  favouriteList: any[] = [];

  constructor(private proSrv: ProductService) {
    this.listProduct = [...this.proSrv.listPhone, ...this.proSrv.listLaptop, ...this.proSrv.listTablet, ...this.proSrv.listWatch];
    this.getFavouriteList();
    // console.log(this.listProduct)
  }

  ngOnInit() {
  }

  private getFavouriteList() {
    if(this.listProduct && this.listProduct.length > 0) {
      this.listProduct.forEach((ele: any) => {
        if(ele['like'] >= 2) {
          this.favouriteList.push(ele);
        }
      })
    }
  }

}
