import { Component } from "@angular/core";
import { AccountModel } from "src/app/models/account.model";
import { AccountService } from "src/app/services/account.service";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {

  listProduct: any[] = [];
  listProductCart: any[] = [];
  accLogin!: AccountModel;

  subtotal: number = 0;
  delivery: number = 0;
  total: number = this.subtotal - this.delivery;

  constructor(private acctService: AccountService) {
    if(this.acctService.accLogin) {
      this.acctService.accLogin.subscribe(acc => this.accLogin = acc);
      // console.log(this.accLogin);
    }

    if(localStorage.getItem(JSON.stringify(this.accLogin.userId))) {
      let arr = [];
      arr = JSON.parse(
        `${localStorage.getItem(JSON.stringify(this.accLogin.userId))}`);
      this.listProduct = arr;
      // console.log(this.listProduct);
    }
  }

  ngOnInit() {
    let newArr: any[] = [];
    let stt: number = 1;

    if(this.listProduct && this.listProduct.length > 0) {
      this.listProduct.forEach((ele: any) => {
        if(!newArr.includes(ele)) {
          let obj = {
            id: stt,
            image: ele['image'],
            description: ele['description'],
            quantity: 1,
            price: ele['price'],
            subtotal: ele['price'],
            deliveryOption: '',
            delivery: 0,
            total: 0,
            isConfimrm: false
          }
        newArr.push(obj);
        stt++;
        }
        else {
          // newArr.forEach((ele: any) => {
          //   if(ele['id'] === stt) {
          //     ele['quantity'] += 1;
          //   }
          // })
        }
      })
    }
    this.listProductCart = newArr;
    console.log(this.listProductCart)

    this.listProductCart.forEach((ele: any) => {
      this.subtotal += Number(ele['subtotal']);
    })
    // console.log(this.listProductCart)

  }

  public changeQuantity(productId: number, plusOrMinus: string) {
    if(this.listProductCart && this.listProductCart.length > 0) {
      this.listProductCart.forEach((ele: any) => {
        if(ele['id'] === productId) {
          switch(plusOrMinus) {
            case 'plus': {
                ele['quantity'] += 1;
              break
            }
            case 'minus': {
              if(ele['quantity'] > 0) {
                ele['quantity'] -= 1;
              }
              break
            }
          }
        }
      })
    }
    // console.log(this.listProductCart)

    this.listProductCart.forEach((ele: any) => {
      // console.log(ele['price'])  //22.990.000
      // console.log(ele['quantity'])  //1

      console.log(typeof Number(ele['price']))  //number
      console.log(typeof ele['quantity'])  //number

      // console.log( (typeof (Number(ele['price']) * ele['quantity'])))  //number
      // console.log( (Number(ele['price']) * ele['quantity']))  //NaN

      // console.log(typeof Number(ele['subtotal']))//number
      // ele['subtotal'] = Number(ele['price']) * ele['quantity'];
    })
  }


}
