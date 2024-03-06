import { Component } from "@angular/core";
import { AccountModel } from "src/share-models/account.model";
import { CartItem } from "src/share-models/cart-item.model";
import { CartService } from "src/share-services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {

  accLogin!: AccountModel;

  listProduct: CartItem[] = [];

  subtotal: number = 0;
  delivery: number = 0;
  total: number = 0;

  constructor(private cartSrv: CartService) {
    this.accLogin = this.cartSrv.accLogin;

    if(this.accLogin) {
      if(localStorage.getItem(`${this.accLogin.userId}`)) {
        this.listProduct = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`)
      }
    }

    this.resetTotal();
  }

  public changeQuantity(productId: any, plusOrMinus: string) {
    if(this.listProduct && this.listProduct.length > 0) {
      this.listProduct.forEach((ele: any) => {
        if(ele['id'] === productId) {
          switch(plusOrMinus) {
            case 'plus': {
                ele['quantity'] += 1;
              break
            }
            case 'minus': {
              if(ele['quantity'] > 1) {
                ele['quantity'] -= 1;
              }
              break
            }
          }
        }
      })
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
