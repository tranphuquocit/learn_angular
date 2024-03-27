import { ChangeDetectorRef, Component } from "@angular/core";
import { ProductService } from "src/app/share/share-services/product.service";

@Component({
  selector: 'app-favourite-product',
  templateUrl: './favourite-product.component.html',
  styleUrls: ['./favourite-product.component.scss']
})

export class FavouriteProductComponent {

  listProduct: any[] = [];

  favouriteList: any[] = [];

  arrLikeProduct: any[] = [];

  constructor(private proSrv: ProductService) {

    if(localStorage.getItem('productsLiked')) {
      this.arrLikeProduct = JSON.parse(`${localStorage.getItem('productsLiked')}`);
    }

    this.getListProduct()
      .then((res: any) => {
        this.listProduct = res;
        // this.scanLike();
        console.table(this.listProduct)
        this.getFavouriteList();
      })
      .catch(err => {
        // hiện chưa có data
      })
  }

  private getListProduct() {
    return new Promise((resolve, reject) => {
      let listProduct: any[] = [];
      this.proSrv.getListProduct().subscribe(list => listProduct = list);
      if(listProduct && listProduct.length > 0) {
        const newList = listProduct.map((value) => {
          value['like'] = 0;
          return value;
        })
        resolve(newList);
      } else {
        reject([])
      }
    })
  }

  private getFavouriteList() {
    if(this.listProduct && this.listProduct.length > 0) {
      this.listProduct.forEach((ele: any) => {
        if(ele['like'] > 0) {
          this.favouriteList.push(ele);
        }
      })
    }
    this.favouriteList.sort((a,b) => (a.like > b.like) ? -1 : ((b.like > a.like) ? 1 : 0))

  }

  private scanLike() {
    this.listProduct.map((ele: any) => {
      return ele;
    })
    this.listProduct.forEach((eleP: any) => {
      this.arrLikeProduct.forEach((eleLP: any) => {
        if((eleP['type'] === eleLP['type']) && (eleP['id'] === eleLP['productId'])) {
          eleP['like'] += 1;
        }
      })
    })
  }
}
