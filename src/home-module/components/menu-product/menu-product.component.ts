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

  arrange!: string;

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

  public arrangeProduct() {
    if(this.arrange) {
      switch(this.arrange) {
        case 'price-increase': {
          if(this.listProduct) {
            this.listProduct.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
          }
          break;
        }
        case 'price-decrease': {
          if(this.listProduct) {
            this.listProduct.sort((a,b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0))
          }
          break;
        }
        case 'name-a-to-z': {
          if(this.listProduct) {
            this.listProduct.sort((a,b) => (a.description > b.description) ? 1 : ((b.description > a.description) ? -1 : 0))
          }
          break;
        }
        case 'name-z-to-a': {
          if(this.listProduct) {
            this.listProduct.sort((a,b) => (a.description > b.description) ? -1 : ((b.description > a.description) ? 1 : 0))
          }
          break;
        }
        case 'best-seller': {
          if(this.listProduct) {
            this.listProduct.sort((a,b) => (a.description > b.description) ? -1 : ((b.description > a.description) ? 1 : 0))
          }
          break;
        }
      }
    }

  }
}
