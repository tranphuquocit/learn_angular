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

    this.getListProduct()
      .then((res: any) => {
        this.listProduct = res;
        this.scanLike();
      })
      .catch(err => {
        // hiện chưa có data
      })

  }

  // ngOnChange() {
  //   this.getListProducts()
  //   .then((res: any) => {
  //     this.listProduct = res;
  //   })
  //   .catch(err => {
  //     console.log('Error');
  //   })
  // }

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
      let listProduct: any[] = [];
      this.proSrv.getListProduct().subscribe(list => listProduct = list);
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

  private scanLike() {
    this.listProduct.forEach((eleP: any) => {
      this.arrLikeProduct.forEach((eleLP: any) => {
        if((eleP['type'] === eleLP['type']) && (eleP['id'] === eleLP['productId'])) {
          eleP['like'] += 1;
        }
      })
    })
  }
}
