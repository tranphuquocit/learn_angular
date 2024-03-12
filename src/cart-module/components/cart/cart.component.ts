import { Component } from "@angular/core";
import { AccountModel } from "src/share-models/account.model";
import { CartItem } from "src/share-models/cart-item.model";
import { AccountService } from "src/share-services/account.service";
import { CartService } from "src/share-services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {

  accLogin!: AccountModel;
  isLogin!: boolean;

  listProduct: CartItem[] = [];

  listTempProduct: CartItem[] = [];

  subtotal: number = 0;
  delivery: number = 0;
  total: number = 0;

  constructor(private cartSrv: CartService, private accSrv: AccountService) {
    this.accLogin = this.accSrv.accLogin;
    this.isLogin = this.accSrv.isLogin;

    if(this.isLogin) {
      if(localStorage.getItem(`${this.accLogin.userId}`)) {
        this.listProduct = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);
        this.listTempProduct = this.cartSrv.listTempProduct;

        let listIdAdded: any[] = [];

        this.listProduct.forEach((eleP: any) => {
          this.listTempProduct.forEach((eleT: any) => {
            if((eleP['image'] === eleT.image) && (eleP['description'] === eleT.description) && (eleP['price'] === eleT.price) && (eleP['delivery'] === eleT.delivery) && (eleP['deliveryOption'] === eleT.deliveryOption)) {
              listIdAdded.push(eleT['id'])
              eleP['quantity'] += eleT['quantity'];
              eleP['subtotal'] = eleP['quantity'] * eleP['price'];
              localStorage.setItem(`${this.accLogin.userId}`, JSON.stringify(this.listProduct));
              this.listProduct = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);
            }
          })
        })

        this.listTempProduct.forEach((ele: any) => {
          if(!listIdAdded.includes(ele['id'])) {
            this.listProduct.push(ele);
            localStorage.setItem(`${this.accLogin.userId}`, JSON.stringify(this.listProduct));
            this.listProduct = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);
          }
        })

        this.cartSrv.setListTempProduct([]);
      }
    }
    else {
      this.listProduct = this.cartSrv.listTempProduct;
    }

    this.resetTotal();
  }

  // ngOnChange() {
  //   if(this.isLogin) {
  //     this.listProduct = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);
  //   }
  //   else {
  //     this.listProduct = this.cartSrv.listTempProduct;
  //   }
  // }

  public changeQuantity(productId: any, plusOrMinus: string) {
    if(this.accLogin) {
      if(this.listProduct && this.listProduct.length > 0) {
        this.listProduct.forEach((ele: any) => {
          if(ele['id'] === productId) {
            switch(plusOrMinus) {
              case 'plus': {
                  ele['quantity'] += 1;
                  localStorage.setItem(`${this.accLogin.userId}`, JSON.stringify(this.listProduct));
                  this.listProduct = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);
                break;
              }
              case 'minus': {
                if(ele['quantity'] > 1) {
                  ele['quantity'] -= 1;
                  localStorage.setItem(`${this.accLogin.userId}`, JSON.stringify(this.listProduct));
                  this.listProduct = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);
                }
                break;
              }
            }
          }
        })
      }
    }
    else {
      if(this.listProduct && this.listProduct.length > 0) {
        this.listProduct.forEach((ele: any) => {
          if(ele['id'] === productId) {
            switch(plusOrMinus) {
              case 'plus': {
                  ele['quantity'] += 1;
                  this.cartSrv.setListTempProduct(this.listProduct);
                  this.listProduct = this.cartSrv.listTempProduct;
                break;
              }
              case 'minus': {
                if(ele['quantity'] > 1) {
                  ele['quantity'] -= 1;
                  this.cartSrv.setListTempProduct(this.listProduct);
                  this.listProduct = this.cartSrv.listTempProduct;
                }
                break;
              }
            }
          }
        })
      }
    }

    //set price
    this.resetTotal();
  }

  public removeProduct(productId: any) {
    let newArr: any[] = [];
    this.listProduct.forEach((ele: any) => {
      if(ele['id'] === productId) {
        newArr.push(ele);
      }
    })
    const newList = this.listProduct.filter(item => !newArr.includes(item));
    this.listProduct = newList;
    localStorage.setItem(`${this.accLogin.userId}`, JSON.stringify(newList));

    this.resetTotal();
  }

  private resetTotal() {
    if(this.listProduct.length > 0) {
      //reset subtotal
    this.subtotal = 0;
    this.listProduct.forEach((ele: any) => {
      ele['subtotal'] = ele['price'] * ele['quantity'];
      this.subtotal += ele['subtotal'];
    })

    //reset total
    this.total = 0;
    this.total = this.subtotal - this.delivery;
    }
    else {
      this.total = 0;
      this.subtotal = 0;
    }
  }
}
