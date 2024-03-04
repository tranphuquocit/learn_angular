import { Component } from "@angular/core";
import { ProductService } from "src/share-services/product.service";

@Component({
  selector: 'app-menu-product',
  templateUrl: './menu-product.component.html',
  styleUrls: ['./menu-product.component.scss']
})

export class MenuProductComponent {

  listProduct!: any[];

  arrLikeProduct: any[] = [];

  constructor(private proSrv: ProductService) {
    this.listProduct = this.proSrv.listPhone;

    if(localStorage.getItem('productsLiked')) {
      this.arrLikeProduct = JSON.parse(`${localStorage.getItem('productsLiked')}`);
    }
  }

  ngOnInit() {
    this.countLike();
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
    this.countLike();
  }

  private countLike() {
    if(this.listProduct && this.listProduct.length > 0) {
      this.listProduct.forEach((item: any) => {
        item.like = 0;
      })
    }
    this.arrLikeProduct.forEach((ele: any) => {
      this.listProduct.forEach((eleP: any) => {
        if((ele['productId'] === eleP['id']) && (ele['type'] === eleP['type'])) {
          eleP['like'] += 1;
        }
      })
    })
  }
}
