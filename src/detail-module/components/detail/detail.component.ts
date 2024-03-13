import { LocalizedString } from "@angular/compiler";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountModel } from "src/share-models/account.model";
import { ProductModel } from "src/share-models/product.model";
import { AccountService } from "src/share-services/account.service";
import { CartService } from "src/share-services/cart.service";
import { ProductService } from "src/share-services/product.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent {

  listProduct!: any[];

  currentProduct!: ProductModel;

  accLogin!: AccountModel;

  isLogin!: boolean;

  arrLikeProduct: any[] = [];

  currentUrl!: string;

  productInfo: any = {};

  listProductOnCart: any[] = [];

  tempListProductOnCart: any[] = [];

  constructor(
    private proSrv: ProductService,
    private route: ActivatedRoute,
    private accSrv: AccountService,
    private router: Router
    ) {
      this.accLogin = this.accSrv.accLogin;
      this.isLogin = this.accSrv.isLogin;

      this.setCurrentProduct();

      this.setArrLikeProduct();

      //get list products on cart
      if(this.isLogin) {
        if(localStorage.getItem(`${this.accLogin.userId}`)) {
          this.listProductOnCart = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);
        }
      }
      else {
        if(localStorage.getItem('guess')) {
          this.listProductOnCart = JSON.parse(`${localStorage.getItem('guess')}`);
        }
      }

      this.checkIsLiked();

      //set like cho hành động trước đó khi chưa đăng nhập
      if(localStorage.getItem('productInfo')) {
        this.productInfo = JSON.parse(`${localStorage.getItem('productInfo')}`);
        if(this.isLogin && !this.currentProduct.isLiked) {
          let obj = {
            productId: this.productInfo['productId'],
            type: this.productInfo['type'],
            userId: this.accLogin['userId']
          }
          this.arrLikeProduct.push(obj);
          localStorage.setItem('productsLiked', JSON.stringify(this.arrLikeProduct));
          localStorage.removeItem('productInfo')
        }
      }

      this.checkIsLiked();

    }

  private getParamUrl() {
    let id = this.route.snapshot.params['id'];
    let type = this.route.snapshot.params['name'];
    return {
      id: id,
      name: type
    }
  }

  private setCurrentProduct() {
    let id = this.getParamUrl()['id'];
    let type = this.getParamUrl()['name'];
    switch(type) {
      case 'phone': {
        this.listProduct = this.proSrv.listPhone;
        if(this.listProduct && this.listProduct.length > 0) {
          this.listProduct.forEach((ele: any) => {
            if(ele['id'] === id) {
              this.currentProduct = ele;
            }
          })
        }
        break;
      }
      case 'laptop': {
        this.listProduct = this.proSrv.listLaptop;
        if(this.listProduct && this.listProduct.length > 0) {
          this.listProduct.forEach((ele: any) => {
            if(ele['id'] === id) {
              this.currentProduct = ele;
            }
          })
        }
        break;
      }
      case 'tablet': {
        this.listProduct = this.proSrv.listTablet;
        if(this.listProduct && this.listProduct.length > 0) {
          this.listProduct.forEach((ele: any) => {
            if(ele['id'] === id) {
              this.currentProduct = ele;
            }
          })
        }
        break;
      }
      case 'watch': {
        this.listProduct = this.proSrv.listWatch;
        if(this.listProduct && this.listProduct.length > 0) {
          this.listProduct.forEach((ele: any) => {
            if(ele['id'] === id) {
              this.currentProduct = ele;
            }
          })
        }
        break;
      }
    }
  }

  public likeProduct() {
    if(!this.accLogin) {
      this.accSrv.setCurUrl(`detail/${this.getParamUrl().name}/${this.getParamUrl().id}`);
      this.router.navigate(['login']);

      let obj = {
        type: this.currentProduct.type,
        productId: this.currentProduct.id
      }

      localStorage.setItem('productInfo', JSON.stringify(obj));
    }
    else {
      this.checkIsLiked();

      //active like
      if(!this.currentProduct.isLiked) {
        this.currentProduct.isLiked = true;
        let obj = {
          type: this.currentProduct.type,
          productId: this.currentProduct.id,
          userId: this.accLogin.userId
        }
        this.arrLikeProduct.push(obj);
        localStorage.setItem('productsLiked', JSON.stringify(this.arrLikeProduct));
        this.setArrLikeProduct();

        //update like on service
        this.updateLike('plus');
      }
      //remove like
      else if(this.currentProduct.isLiked) {
        this.currentProduct.isLiked = false;
        let newArray: any = [];
        this.arrLikeProduct.forEach((ele: any) => {
          if((ele['userId'] === this.accLogin.userId) && (ele['productId'] === this.currentProduct.id) && (ele['type'] === this.currentProduct.type)) {
            newArray.push(ele);
          }
        });
        const newList = this.arrLikeProduct.filter(item => !newArray.includes(item));
        localStorage.setItem('productsLiked', JSON.stringify(newList));
        this.setArrLikeProduct();

        //update like on service
        this.updateLike('minus');
      }
    }
  }

  private setArrLikeProduct() {
    if(localStorage.getItem('productsLiked')) {
      this.arrLikeProduct = JSON.parse(`${localStorage.getItem('productsLiked')}`);
    }
  }

  private updateLike(plusOrMinus: string) {
    let type = this.getParamUrl().name;
    switch(plusOrMinus) {
      case 'plus': {
        if(this.listProduct && this.listProduct.length > 0) {
          this.listProduct.forEach((ele: any) => {
            if(ele['id'] === this.currentProduct.id) {
              ele['like'] += 1;
            }
          })
        }
        switch(type) {
          case 'phone': {
            this.proSrv.setListPhone(this.listProduct);
            break;
          }
          case 'laptop': {
            this.proSrv.setListLaptop(this.listProduct);
            break;
          }
          case 'tablet': {
            this.proSrv.setListTablet(this.listProduct);
            break;
          }
          case 'watch': {
            this.proSrv.setListWatch(this.listProduct);
            break;
          }
        }
        break;
      }
      case 'minus': {
        if(this.listProduct && this.listProduct.length > 0) {
          this.listProduct.forEach((ele: any) => {
            if(ele['id'] === this.currentProduct.id) {
              if(ele['like'] > 0) {
                ele['like'] -= 1;
              }
            }
          })
        }
        switch(type) {
          case 'phone': {
            this.proSrv.setListPhone(this.listProduct);
            break;
          }
          case 'laptop': {
            this.proSrv.setListLaptop(this.listProduct);
            break;
          }
          case 'tablet': {
            this.proSrv.setListTablet(this.listProduct);
            break;
          }
          case 'watch': {
            this.proSrv.setListWatch(this.listProduct);
            break;
          }
        }
        break;
      }
    }


  }

  private checkIsLiked() {
    //reset isLiked
    if(this.listProduct && this.listProduct.length > 0) {
      this.listProduct.forEach((item: any) => {
        item.isLiked = false;
      })
    }

    //scan isLiked
    if(!this.isLogin) {
      this.currentProduct.isLiked = false;
    }
    else if(this.arrLikeProduct && this.arrLikeProduct.length > 0) {
      this.arrLikeProduct.forEach((ele: any) => {
        if((ele['type'] === this.currentProduct.type) && (ele['productId'] === this.currentProduct.id) && (ele['userId'] === this.accLogin.userId)) {
          this.currentProduct.isLiked = true;
        }
        else {
          this.currentProduct.isLiked = false;
        }
      })
    }
  }

  public addToCart() {
    alert('Đã thêm vào giỏ hàng!')
      //tang sp trong cart
      let obj = {
        id: Math.floor(Math.random() * 100) + 1,  //random 1-100
        image: this.currentProduct.image,
        description: this.currentProduct.description,
        price: this.currentProduct.price,
        quantity: 1,
        subtotal: this.currentProduct.price,
        deliveryOption: '',
        delivery: 0,
        total: this.currentProduct.price
      }

      //check quantity
      if(this.isLogin) {
        let isSame: boolean = false;
        this.listProductOnCart.forEach((ele: any) => {
          if((ele['image'] === obj.image) && (ele['description'] === obj.description) && (ele['price'] === obj.price) && (ele['delivery'] === obj.delivery) && (ele['deliveryOption'] === obj.deliveryOption) && (ele['total'] === obj.total)) {
            isSame = true;
            ele['quantity'] += 1;
            ele['subtotal'] = ele['quantity'] * ele['price'];
            localStorage.setItem(`${this.accLogin.userId}`, JSON.stringify(this.listProductOnCart));
            this.listProductOnCart = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);
          }
      })

        if(!isSame) {
          this.listProductOnCart.push(obj)
          localStorage.setItem(`${this.accLogin.userId}`, JSON.stringify(this.listProductOnCart));
          this.listProductOnCart = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);
        }
      }
      else {
        let isSame: boolean = false;
        this.listProductOnCart.forEach((ele: any) => {
          if((ele['image'] === obj.image) && (ele['description'] === obj.description) && (ele['price'] === obj.price) && (ele['delivery'] === obj.delivery) && (ele['deliveryOption'] === obj.deliveryOption) && (ele['total'] === obj.total)) {
            isSame = true;
            ele['quantity'] += 1;
            ele['subtotal'] = ele['quantity'] * ele['price'];
            localStorage.setItem('guess', JSON.stringify(this.listProductOnCart));
            this.listProductOnCart = JSON.parse(`${localStorage.getItem('guess')}`);
          }
      })

        if(!isSame) {
          this.listProductOnCart.push(obj)
          localStorage.setItem('guess', JSON.stringify(this.listProductOnCart));
            this.listProductOnCart = JSON.parse(`${localStorage.getItem('guess')}`);
        }
      }
}
}
