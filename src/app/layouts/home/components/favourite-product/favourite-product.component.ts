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

    this.proSrv.getListProduct().subscribe(list => {
      this.listProduct = this.scanLike(list);
      this.getFavouriteList();
      console.log(this.favouriteList)
    });



    // this.getListProduct()
    //   .then((res: any) => {
    //     this.listProduct = res;
    //     this.getFavouriteList();
    //   })
    //   .catch(err => {
    //     // hiện chưa có data
    //   })
  }

  private getFavouriteList() {
    this.favouriteList = [];
    if(this.listProduct && this.listProduct.length > 0) {
      this.listProduct.forEach((ele: any) => {
        if(ele['like'] > 0) {
          this.favouriteList.push(ele);
        }
      })
    }
    this.favouriteList.sort((a,b) => (a.like > b.like) ? -1 : ((b.like > a.like) ? 1 : 0))

  }

  private getListProduct() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let listProduct: any[] = [];
        this.proSrv.getListProduct().subscribe(list => listProduct = list);
        if(this.scanLike(listProduct).length > 0) {
          resolve(this.scanLike(listProduct));
        }
        else {
          reject([]);
        }
      }, 500)
    })
  }

  private scanLike(list: any[]) {
    let resetList = list.map((ele: any) => {
      ele['like'] = 0;
      return ele;
    })

    let newList: any[] = [];
    this.arrLikeProduct.forEach((eleLP: any) => {
      newList = resetList.map((ele: any) => {
        if((ele['type'] === eleLP['type']) && (ele['id'] === eleLP['productId'])) {
          ele['like'] += 1;
          return ele;
        }
        else return ele;
      })
    })
    return newList;
  }
}
