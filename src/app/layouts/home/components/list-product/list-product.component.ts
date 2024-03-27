import { Component } from "@angular/core";
import { ProductService } from "src/app/share/share-services/product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})

export class ListProductComponent {

  listProduct!: any[];

  arrLikeProduct: any[] = [];

  arrange: string = 'SX';

  constructor(private proSrv: ProductService) {

    if(localStorage.getItem('productsLiked')) {
      this.arrLikeProduct = JSON.parse(`${localStorage.getItem('productsLiked')}`);
    }

    this.proSrv.getListProduct().subscribe(list => {
      this.listProduct = this.scanLike(list);
    });

    // this.scanLike();
    // this.getListProduct()
    //   .then((res: any) => {
    //     this.listProduct = res;
    //   })
    //   .catch(err => {
    //     // hiện chưa có data
    //   })

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
            this.listProduct.sort((a,b) => (a.description.toLowerCase() > b.description.toLowerCase()) ? 1 : ((b.description.toLowerCase() > a.description.toLowerCase()) ? -1 : 0))
          }
          break;
        }
        case 'name-z-to-a': {
          if(this.listProduct) {
            this.listProduct.sort((a,b) => (a.description.toLowerCase() > b.description.toLowerCase()) ? -1 : ((b.description.toLowerCase() > a.description.toLowerCase()) ? 1 : 0))
          }
          break;
        }
        case 'best-seller': {
          if(this.listProduct) {
            this.listProduct.sort((a,b) => (a.sold > b.sold) ? -1 : ((b.sold > a.sold) ? 1 : 0))
          }
          break;
        }
      }
    }

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
