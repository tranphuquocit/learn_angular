import { JsonPipe } from "@angular/common";
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
    // localStorage.setItem('productsLiked', JSON.stringify([]))//reset de test
    if(localStorage.getItem('productsLiked')) {
      let arr = [];
      arr = JSON.parse(`${localStorage.getItem('productsLiked')}`);
      this.arrListLikeProduct = arr;
    }
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
      if(item.id == id) {
        this.currentProduct = item;
      }
    })
    this.scanArrListLikeProduct(this.currentProduct, `${this.accLogin.userId}`);
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

public likeProduct() {
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
        userId: this.accLogin.userId,
        productId: this.currentProduct.id,
        type: name
      };
      const newArr = [];
      newArr.push(obj)
      this.arrListLikeProduct = [...this.arrListLikeProduct, ...newArr];
      localStorage.setItem('productsLiked', JSON.stringify(this.arrListLikeProduct));

      //set like

      let newListPlus = this.updateLike('plus');
      this.productService.setListPhone(newListPlus);
    }
    else {
      this.currentProduct.isLiked = false;
      let newArray: any = [];
      this.arrListLikeProduct.forEach((ele: any) => {
        if((ele['userId'] === this.accLogin.userId) && (ele['productId'] === this.currentProduct.id) && (ele['type'] === this.currentProduct.type)) {
          newArray.push(ele);
        }
      });
      const newList = this.arrListLikeProduct.filter(item => !newArray.includes(item))
      localStorage.setItem('productsLiked', JSON.stringify(newList));

      //set like

      let newListMinus = this.updateLike('minus');
      this.productService.setListPhone(newListMinus);
    }
  }
}

public updateLike(plusOrMinus: any) {
  switch(plusOrMinus) {
    case 'plus': {
      if(this.listProduct && this.listProduct.length > 0) {
        this.listProduct.forEach((item: any) => {
          if(item && item.id === this.currentProduct.id) {
            let like: any = item.like;
            if(like >= 0) {
              let newLike: any;
              newLike = like + 1;
              item.like = newLike;
            }
          }
        })
      };
      let newList: any = this.listProduct;
      return newList;
    }
    case 'minus': {
      if(this.listProduct && this.listProduct.length > 0) {
        this.listProduct.forEach((item: any) => {
          if(item && item.id === this.currentProduct.id) {
            let like: any = item.like;
            if(like >= 1) {
              let newLike: any;
              newLike = like - 1;
              item.like = newLike;
            }
          }
        })
      };
      let newList: any = this.listProduct;
      return newList;
    }
  }
}

private scanArrListLikeProduct(product: ProductModel, userId: string) {
  if(this.arrListLikeProduct && this.arrListLikeProduct.length > 0) {
    this.arrListLikeProduct.forEach((ele: any) => {
      if((ele['userId'] === userId) && (ele['productId'] === product.id) && (ele['type'] === product.type)) {
        product.isLiked = true;
      }
    })
  }
}
}
