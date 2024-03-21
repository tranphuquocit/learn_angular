import { ChangeDetectorRef, Component } from "@angular/core";
import { ProductService } from "src/share-services/product.service";

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
        this.countLike();
        this.getFavouriteList();
      })
      .catch(err => {
        // hiện chưa có data
      })

    // this.scanLike();

  }

  ngOnInit() {
    // this.countLike();
  }

  private getListProduct() {
    return new Promise((resolve, reject) => {
      const listProduct = [...this.proSrv.listPhone, ...this.proSrv.listLaptop, ...this.proSrv.listTablet, ...this.proSrv.listWatch];
      if(listProduct && listProduct.length > 0) {
        const newList = listProduct.map((value) => {
          value.like = 0;
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
    this.listProduct.forEach((eleP: any) => {
      this.arrLikeProduct.forEach((eleLP: any) => {
        if((eleP['type'] === eleLP['type']) && (eleP['id'] === eleLP['productId'])) {
          eleP['like'] += 1;
        }
      })
    })
  }

  private countLike() {
    // if(this.listProduct && this.listProduct.length > 0) {
    //   this.listProduct.forEach((item: any) => {
    //     item.like = 0;
    //   })
    // }
    this.arrLikeProduct.forEach((ele: any) => {
      this.listProduct.forEach((eleP: any) => {
        if((ele['productId'] === eleP['id']) && (ele['type'] === eleP['type'])) {
          eleP['like'] += 1;
        }
      })
    })
  }

}
