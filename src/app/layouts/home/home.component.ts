import { Component } from "@angular/core";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  arrListLikeProduct: any[] = [];
  listPhone: any[] = [];
  listLaptop: any[] = [];
  listTablet: any[] = [];
  listWatch: any[] = [];

  constructor(private productService: ProductService) {
    if(localStorage.getItem('productsLiked')) {
      let arr = [];
      arr = JSON.parse(`${localStorage.getItem('productsLiked')}`);
      this.arrListLikeProduct = arr;
    }

    this.listPhone = this.productService.listPhone;
    this.listLaptop = this.productService.listLaptop;
    this.listTablet = this.productService.listTablet;
    this.listWatch = this.productService.listWatch;
    // console.log(this.arrListLikeProduct)
    this.resetLikeOfListProduct();
    this.scanLike();
  }

  private scanLike() {
    if(this.arrListLikeProduct && this.arrListLikeProduct.length > 0) {
      this.arrListLikeProduct.forEach((eleLikeProduct: any) => {
        switch(eleLikeProduct['type']) {
          case 'phone': {
            this.listPhone.forEach((eleListPhone: any) => {
              if(eleLikeProduct['productId'] === eleListPhone['id']) {
                      eleListPhone['like'] += 1;
            }});
            break;
          }
          case 'laptop': {
            this.listLaptop.forEach((eleListLaptop: any) => {
              if(eleLikeProduct['productId'] === eleListLaptop['id']) {
                eleListLaptop['like'] += 1;
            }});
            break;
          }
          case 'tablet': {
            this.listTablet.forEach((eleListTablet: any) => {
              if(eleLikeProduct['productId'] === eleListTablet['id']) {
                eleListTablet['like'] += 1;
            }});
            break;
          }
          case 'watch': {
            this.listWatch.forEach((eleListWatch: any) => {
              if(eleLikeProduct['productId'] === eleListWatch['id']) {
                eleListWatch['like'] += 1;
            }});
            break;
          }
        }
      })
    }
    let newListPhone = this.listPhone;
    this.productService.setListPhone(newListPhone)
    // console.log(this.listPhone)
  }

  private resetLikeOfListProduct() {
    this.listPhone.forEach((ele: any) => {
      if(ele['like']) {
        ele['like'] = 0;
      }
    })
    this.listLaptop.forEach((ele: any) => {
      if(ele['like']) {
        ele['like'] = 0;
      }
    })
    this.listTablet.forEach((ele: any) => {
      if(ele['like']) {
        ele['like'] = 0;
      }
    })
    this.listWatch.forEach((ele: any) => {
      if(ele['like']) {
        ele['like'] = 0;
      }
    })
  }
}

