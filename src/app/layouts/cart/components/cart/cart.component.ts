import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { AccountModel } from "src/app/share/share-models/account.model";
import { CartItem } from "src/app/share/share-models/cart-item.model";
import { AccountService } from "src/app/share/share-services/account.service";
import { ProductService } from "src/app/share/share-services/product.service";
import { CheckoutDialogComponent } from "../checkout-dialog/checkout-dialog.component";
import { InforDeli } from "src/app/share/share-models/infor-deli.model";
import { JsonPipe } from "@angular/common";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
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

  inforDeli!: InforDeli;

  listCheckout: CartItem[] = [];
  listWhenCancelBill!: CartItem[];

  isSelect!: boolean;

  constructor(private accSrv: AccountService, private router: Router, private proSrv: ProductService, private dialog: MatDialog) {
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
        let product = this.listProduct.find((ele: any) => ele['id'] === productId);
        if(product) {
          switch(plusOrMinus) {
            case 'plus': {
              if(product.quantity) {
                product.quantity += 1;
              }
              if(product.price && product.quantity) {
                product.subtotal = product.price * product.quantity;
              }
              this.checkProduct();
              localStorage.setItem(`${this.accLogin.userId}`, JSON.stringify(this.listProduct));
              this.listProduct = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);
              break;
            }
            case 'minus': {
              if(product.quantity && product.quantity > 1) {
                product.quantity -= 1;
              }
              if(product.price && product.quantity) {
                product.subtotal = product.price * product.quantity;
              }
              this.checkProduct();
              localStorage.setItem(`${this.accLogin.userId}`, JSON.stringify(this.listProduct));
              this.listProduct = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);
              break;
            }
          }
        }
      }
    }
    else {
      if(this.listProduct && this.listProduct.length > 0) {
        let product = this.listProduct.find((ele: any) => ele['id'] === productId);
        if(product) {
          switch(plusOrMinus) {
            case 'plus': {
              if(product.quantity) {
                product.quantity += 1;
              }
              if(product.price && product.quantity) {
                product.subtotal = product.price * product.quantity;
              }
              this.checkProduct();
              localStorage.setItem('guess', JSON.stringify(this.listProduct));
              this.listProduct = JSON.parse(`${localStorage.getItem('guess')}`);
              break;
            }
            case 'minus': {
              if(product.quantity && product.quantity > 1) {
                product.quantity -= 1;
              }
              if(product.price && product.quantity) {
                product.subtotal = product.price * product.quantity;
              }
              this.checkProduct();
              localStorage.setItem('guess', JSON.stringify(this.listProduct));
              this.listProduct = JSON.parse(`${localStorage.getItem('guess')}`);
              break;
            }
          }
        }
      }
    }
  }

  private setLocal(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  private getLocal(key: string) {
    localStorage.getItem(key);
  }

  public removeProduct(productId: any) {
    const newList = this.listProduct.filter((ele: any) => ele['id'] !== productId);
    this.listProduct = newList;

    if(this.isLogin) {
      this.checkProduct();
      localStorage.setItem(`${this.accLogin.userId}`, JSON.stringify(newList));
    }
    else {
      this.checkProduct();
      localStorage.setItem('guess', JSON.stringify(newList));
    }
  }

  private resetTotal() {
    this.total = 0;
    this.total = this.subtotal - this.delivery;
  }

  //func set subtotal when selecting product to checkout
  public checkProduct() {
    this.subtotal = 0;
    if(this.listProduct) {
      let listCheckout = this.listProduct.filter((ele: any) => ele['isChecked']);
      listCheckout.forEach((ele: any) => this.subtotal += ele['subtotal']);
    }

    this.resetTotal();
  }

  public checkout() {
    //check có sản phẩm nào đc chọn chưa và add list checkout
    this.listCheckout = [];
    if(this.listProduct) {
      this.listCheckout = this.listProduct.filter((ele: any) => ele['isChecked']);
      if(this.listCheckout && this.listCheckout.length > 0) {
        this.isSelect = true;
      }
    }

    if(this.isLogin) {
      if(this.isSelect) {
        localStorage.setItem('listCheckout', JSON.stringify(this.listCheckout))
        const dialogRef = this.dialog.open(CheckoutDialogComponent, {
          height: '400px',
          width: '600px',
        });
        dialogRef.afterClosed().subscribe(result => {
          this.inforDeli = result;
        });
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

  public back() {
    this.router.navigate([this.accSrv.currentUrl]);
  }

  public navigate() {
    this.router.navigate([this.accSrv.currentUrl]);
  }
}
