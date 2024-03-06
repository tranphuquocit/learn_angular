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

  constructor(private proSrv: ProductService, private cdf: ChangeDetectorRef) {
    this.listProduct = [...this.proSrv.listPhone, ...this.proSrv.listLaptop, ...this.proSrv.listTablet, ...this.proSrv.listWatch];
    if(localStorage.getItem('productsLiked')) {
      this.arrLikeProduct = JSON.parse(`${localStorage.getItem('productsLiked')}`);
    }

    this.scanLike();

    this.getFavouriteList();
  }

  ngOnInit() {
  }

  private getFavouriteList() {
    if(this.listProduct && this.listProduct.length > 0) {
      this.listProduct.forEach((ele: any) => {
        // console.log(ele['like'])
        if(ele['like'] > 1) {
          this.favouriteList.push(ele);
        }
      })
      // this.cdf.detectChanges();
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

}
