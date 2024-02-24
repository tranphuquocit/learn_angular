import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountModel } from "src/app/models/account.model";
import { ProductModel } from "src/app/models/product.model";
import { AccountService } from "src/app/services/account.service";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail.product.component.html',
  styleUrls: ['./detail.product.component.scss']
})

export class DetailProductComponent {

  private listProduct!: ProductModel[];
  public currentProduct!: ProductModel;
  isLogin!: boolean;
  accLogin!: AccountModel;
  productUserLiked: any = [];
  productsOfType: any = [];
  objectPhone = {
    type: '',
    products: []
  }
  objectLaptop = {
    type: '',
    products: []
  }
  objectWatch = {
    type: '',
    products: []
  }
  objectTablet = {
    type: '',
    products: []
  }

  arrListLikeProduct: any = [];


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private accService: AccountService,
    private router: Router
    ){
      this.accService.getIsLogin().subscribe(isLogin => this.isLogin = isLogin);
      this.accService.getAccLogin().subscribe(acc => this.accLogin = acc);
    }

  ngOnInit() {
    const allParams = this.route.snapshot.params // allParams is an object
    const name = allParams['name'];
    const id = allParams['id'];
    switch(name) {
      case 'phone': {
        this.listProduct = this.productService.listPhone;
        break;
      }
      case 'laptop': {
        this.listProduct = this.productService.listLaptop;
        break;
      }
      case 'watch': {
        this.listProduct = this.productService.listWatch;
        break;
      }
      case 'tablet': {
        this.listProduct = this.productService.listTablet;
        break;
      }
    }
    this.listProduct.forEach(item => {
      if(item.id == id) {
        this.currentProduct = item;
      }
    })
    // console.log(this.product);
}



public likeProduct() {
  const allParams = this.route.snapshot.params // allParams is an object
  const name = allParams['name'];
  const id = allParams['id'];
  let currentUrl: string = `detail/${name}/${id}`;
  // console.log(currentUrl);
  this.accService.setCurUrl(currentUrl);
  if(!this.isLogin) {
    this.router.navigate(['login']);
  }
  else {
    // this.getProductsOfType(name);
    // // console.log(this.productsOfType)
    // switch(name) {
    //   case 'phone': {
    //     this.productsOfType.push(id);
    //     this.objectPhone = {
    //       type: 'phone',
    //       products: this.productsOfType
    //     };
    //     // console.log(this.objectPhone)
    //     this.productUserLiked.push(this.objectPhone);
    //     localStorage.setItem(`${this.accLogin.username}`, `${JSON.stringify(this.productUserLiked)}`);
    //     break;
    //   }
    //   case 'laptop': {
    //     this.productsOfType.push(id);
    //     this.objectLaptop = {
    //       type: 'laptop',
    //       products: this.productsOfType
    //     };
    //     this.productUserLiked.push(this.objectLaptop);
    //     localStorage.setItem(`${this.accLogin.username}`, `${JSON.stringify(this.productUserLiked)}`);
    //     break;
    //   }
    //   case 'watch': {
    //     this.productsOfType.push(id);
    //     this.objectWatch = {
    //       type: 'watch',
    //       products: this.productsOfType
    //     };
    //     this.productUserLiked.push(this.objectWatch);
    //     localStorage.setItem(`${this.accLogin.username}`, `${JSON.stringify(this.productUserLiked)}`);
    //     break;
    //   }
    //   case 'tablet': {
    //     this.productsOfType.push(id);
    //     this.objectTablet = {
    //       type: 'tablet',
    //       products: this.productsOfType
    //     };
    //     this.productUserLiked.push(this.objectTablet);
    //     localStorage.setItem(`${this.accLogin.username}`, `${JSON.stringify(this.productUserLiked)}`);
    //     break;
    //   }
    // }
    // console.log(localStorage.getItem(`${this.accLogin.username}`))

    let object = {
      userId: this.accLogin.username,
      type: name,
      productId: id
    }
    this.arrListLikeProduct.push(object);
    // console.log(this.arrListLikeProduct);
  }
}

// {userId, productId, productType};

// [
//   {
//     type: phone,
//     productIds: []
//   },
//   {
//     type: laptop,
//     productIds: []
//   }
// ]

public getProductsOfType(name: string) {
  let productsUserLiked: any[] = localStorage.getItem(`${this.accLogin.username}`)?.split('},')!;
  // console.log(productsUserLiked);
  productsUserLiked?.forEach(item => {
    item += '}'
  });
  // console.log(typeof productsUserLiked);
  productsUserLiked?.forEach(item => {
    if(item['type'] === name) {
      this.productsOfType = item['products']
    }
  })
}
}
