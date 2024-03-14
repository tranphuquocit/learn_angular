import { Component } from "@angular/core";
import { Router } from "@angular/router";
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

  isCheckout: boolean = false;

  address!: string;
  phoneNumber!: string;

  listCheckout: CartItem[] = [];
  listWhenCancelBill!: CartItem[];

  isSelect!: boolean;

  constructor(private accSrv: AccountService, private router: Router) {
    //set status login
    this.accLogin = this.accSrv.accLogin;
    this.isLogin = this.accSrv.isLogin;

    //set list products
    if(this.isLogin) {
      //đã login: listProduct = list tạm của user khách + list của user login
      if(localStorage.getItem(`${this.accLogin.userId}`)) {
        this.listProduct = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);

        if(localStorage.getItem('guess')) {
          this.listTempProduct = JSON.parse(`${localStorage.getItem('guess')}`)
        }

        //list lưu những product đã join (trùng product thì tăng số lượng lên)
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

        //thêm những product chưa join
        this.listTempProduct.forEach((ele: any) => {
          if(!listIdAdded.includes(ele['id'])) {
            this.listProduct.push(ele);
            localStorage.setItem(`${this.accLogin.userId}`, JSON.stringify(this.listProduct));
            this.listProduct = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);
          }
        })

        localStorage.removeItem('guess');
      }
    }
    else {
      this.listProduct = JSON.parse(`${localStorage.getItem('guess')}`);
    }

    //set total
    this.checkProduct();

    //set tất cả sản phẩm chưa đc select
    if(this.listProduct) {
      this.listProduct.forEach((ele: any) => {
        ele['isChecked'] = false;
      })
    }
  }

  public changeQuantity(productId: any, plusOrMinus: string) {
    if(this.isLogin) {
      if(this.listProduct && this.listProduct.length > 0) {
        this.listProduct.forEach((ele: any) => {
          if(ele['id'] === productId) {
            switch(plusOrMinus) {
              case 'plus': {
                  ele['quantity'] += 1;
                  ele['subtotal'] = ele['price'] * ele['quantity'];
                  this.checkProduct();
                  localStorage.setItem(`${this.accLogin.userId}`, JSON.stringify(this.listProduct));
                  this.listProduct = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);
                break;
              }
              case 'minus': {
                if(ele['quantity'] > 1) {
                  ele['quantity'] -= 1;
                  ele['subtotal'] = ele['price'] * ele['quantity'];
                  this.checkProduct();
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
                  ele['subtotal'] = ele['price'] * ele['quantity'];
                  this.checkProduct();
                  localStorage.setItem('guess', JSON.stringify(this.listProduct))
                  this.listProduct = JSON.parse(`${localStorage.getItem('guess')}`);
                break;
              }
              case 'minus': {
                if(ele['quantity'] > 1) {
                  ele['quantity'] -= 1;
                  ele['subtotal'] = ele['price'] * ele['quantity'];
                  this.checkProduct();
                  localStorage.setItem('guess', JSON.stringify(this.listProduct))
                  this.listProduct = JSON.parse(`${localStorage.getItem('guess')}`);
                }
                break;
              }
            }
          }
        })
      }
    }
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

    if(this.isLogin) {
      this.checkProduct();
      localStorage.setItem(`${this.accLogin.userId}`, JSON.stringify(newList));
      // this.listProduct = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`)
    }
    else {
      this.checkProduct();
      localStorage.setItem('guess', JSON.stringify(newList));
      // this.listProduct = JSON.parse(`${localStorage.getItem('guess')}`)
    }

    // this.resetTotal();
  }

  private resetTotal() {
    this.total = 0;
    this.total = this.subtotal - this.delivery;
  }

  //func set subtotal when selecting product to checkout
  public checkProduct() {
    this.subtotal = 0;
    if(this.listProduct) {
      this.listProduct.forEach((ele: any) => {
        if(ele['isChecked']) {
          this.subtotal += ele['subtotal'];
        }
      })
    }
    this.resetTotal();
  }

  public checkout() {
    //check có sản phẩm nào đc chọn chưa và add list checkout
    this.listCheckout = [];
    this.listProduct.forEach((ele: any) => {
      if(ele['isChecked']) {
        this.isSelect = true;
        this.listCheckout.push(ele);
      }
    })

    if(this.isLogin) {
      if(this.isSelect) {
        this.isCheckout = true;
        this.listWhenCancelBill = this.listProduct;
        this.listProduct = this.listCheckout;
        alert('Hãy nhập thông tin!')
      }
      else {
        alert('Bạn chưa chọn sản phẩm để thanh toán!')
      }
    }
    else {
      alert('Vui lòng đăng nhập!')
    }
  }

  public cancelBill() {
    this.isCheckout = false;
    this.listProduct = this.listWhenCancelBill;
    this.listWhenCancelBill = [];
  }

  public confirm() {
    if(!this.address || !this.phoneNumber) {
      alert('Hãy nhập đầy đủ thông tin');
    }
    else {
      alert('Đơn hàng của bạn đã được thêm vào hàng chờ!')
      //reset list product on cart
      this.listProduct = this.listWhenCancelBill;
      let newList: any[] = [];
      this.listProduct.forEach((ele: any) => {
        if(!this.listCheckout.includes(ele)) {
          newList.push(ele);
        }
      });
      this.listProduct = newList;
      localStorage.setItem(`${this.accLogin.userId}`, JSON.stringify(this.listProduct));

      //back to homepage
      this.router.navigate(['']);
    }
  }
}
