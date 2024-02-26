import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { concat } from "rxjs";
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

  listPhone: any = [];
  listLaptop: any = [];
  listWatch: any = [];
  listTablet: any = [];

  arrListLikeProduct: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private accService: AccountService,
    private router: Router
    ){
    this.accService.getIsLogin().subscribe(isLogin => this.isLogin = isLogin);
    this.accService.getAccLogin().subscribe(acc => this.accLogin = acc);
    this.listPhone = this.productService.listPhone;
    this.listLaptop = this.productService.listLaptop;
    this.listWatch = this.productService.listWatch;
    this.listTablet = this.productService.listTablet;
    if(localStorage.getItem('productsLiked')) {
      let arr = [];
      arr = JSON.parse(`${localStorage.getItem('productsLiked')}`);
      this.arrListLikeProduct = arr;
    }
    // this.currentProduct.isLiked = true;
    // console.log(this.arrListLikeProduct)
    // this.currentProduct.isLiked = false;
  }

  ngOnInit() {
    //lay chi tiet sp
    let name = this.getParamOfUrl().name;
    let id = this.getParamOfUrl().id;

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
      item.isLiked = false;
      if(item.id == id) {
        this.currentProduct = item;
      }
    })
    this.scanArrListLikeProduct(this.currentProduct, this.accLogin.username);
    // console.log(this.product);
}

private getParamOfUrl() {
  const allParams = this.route.snapshot.params // allParams is an object
  const name = allParams['name'];
  const id = allParams['id'];
  return {
    name: name,
    id: id
  };
}

// {userId, productId, productType};

public likeProduct() {
  // console.log(this.currentProduct)
  let name = this.getParamOfUrl().name;
  let id = this.getParamOfUrl().id;
  let obj = this.getParamOfUrl();
  let currentUrl: string = `detail/${obj.name}/${obj.id}`;
  this.accService.setCurUrl(currentUrl);

  if(!this.isLogin) {
    this.router.navigate(['login']);
  }
  else {
    if(!this.currentProduct.isLiked) {
      this.currentProduct.isLiked = true;
      let obj = {
        userId: this.accLogin.username,
        productId: this.currentProduct.id,
        type: name
      };
      const newArr = [];
      newArr.push(obj)
      this.arrListLikeProduct = [...this.arrListLikeProduct, ...newArr];
      localStorage.setItem('productsLiked', JSON.stringify(this.arrListLikeProduct));
    }
    else {
      this.currentProduct.isLiked = false;
      let newArray: any = [];
      this.arrListLikeProduct.forEach((ele: any) => {
        if((ele['userId'] === this.accLogin.username) && (ele['productId'] === this.currentProduct.id) && (ele['type'] === this.currentProduct.type)) {
          newArray.push(ele);
        }
      });
      const newList = this.arrListLikeProduct.filter(item => !newArray.includes(item))
      console.log(newList)
      // this.arrListLikeProduct = newArrListLikeProduct;
      localStorage.setItem('productsLiked', JSON.stringify(newList));
      // console.log(this.arrListLikeProduct)
    }
  }
}

public updateLike(name: string, id: string, plusOrMinus: string) {
  //cong
  if(plusOrMinus === 'plus') {
    switch(name) {
      case 'phone': {
        for(let item of this.listPhone) {
          if(item.id === id) {
            item.like += 1;
          }
        }
        this.productService.setListPhone(this.listPhone);
        break;
      }
      case 'laptop': {
        for(let item of this.listLaptop) {
          if(item.id === id) {
            item.like += 1;
          }
        }
        this.productService.setListLaptop(this.listLaptop);
        break;
      }
      case 'tablet': {
        for(let item of this.listTablet) {
          if(item.id === id) {
            item.like += 1;
          }
        }
        this.productService.setListTablet(this.listTablet);
        break;
      }
      case 'watch': {
        for(let item of this.listWatch) {
          if(item.id === id) {
            item.like += 1;
          }
        }
        this.productService.setListWatch(this.listWatch);
        break;
      }
    }
  }

  //tru
  else if(plusOrMinus === 'minus') {
    switch(name) {
      case 'phone': {
        for(let item of this.listPhone) {
          if(item.id === id) {
            item.like -= 1;
          }
        }
        this.productService.setListPhone(this.listPhone);
        break;
      }
      case 'laptop': {
        for(let item of this.listLaptop) {
          if(item.id === id) {
            item.like -= 1;
          }
        }
        this.productService.setListLaptop(this.listLaptop);
        break;
      }
      case 'tablet': {
        for(let item of this.listTablet) {
          if(item.id === id) {
            item.like -= 1;
          }
        }
        this.productService.setListTablet(this.listTablet);
        break;
      }
      case 'watch': {
        for(let item of this.listWatch) {
          if(item.id === id) {
            item.like -= 1;
          }
        }
        this.productService.setListWatch(this.listWatch);
        break;
      }
    }
  }
}

private scanArrListLikeProduct(product: ProductModel, userId: any) {
  if(this.arrListLikeProduct && this.arrListLikeProduct.length > 0) {
    // product.isLiked = true;
    // console.log(product)
    // console.log(this.arrListLikeProduct);
    this.arrListLikeProduct.forEach((ele: any) => {
      if((ele['userId'] === userId) && (ele['productId'] === product.id) && (ele['type'] === product.type)) {
        product.isLiked = true;
      }
    })
  }
}
}
