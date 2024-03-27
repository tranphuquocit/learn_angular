import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogContent, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';
import { CheckoutDialogComponent } from "../checkout-dialog/checkout-dialog.component";
import { InforDeli } from "src/app/share/share-models/infor-deli.model";
import { CartItem } from "src/app/share/share-models/cart-item.model";
import { HomeModule } from "src/app/layouts/home/home.module";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AccountModel } from "src/app/share/share-models/account.model";
import { Router } from "@angular/router";
import { AccountService } from "src/app/share/share-services/account.service";
import { ProductService } from "src/app/share/share-services/product.service";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, HomeModule, CommonModule]
})

export class ConfirmDialogComponent {

  // inforDeli!: InforDeli;
  listCheckout!: CartItem[];
  listWhenCancel!: CartItem[];

  accLogin!: AccountModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) public infoDeli: {address: string, phoneNumber: string},
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private dialog: MatDialog, private router: Router,
    private accSrv: AccountService,
    private proSrv: ProductService)
    {

    if(localStorage.getItem('listCheckout')) {
      this.listCheckout = JSON.parse(`${localStorage.getItem('listCheckout')}`);
    }

    this.accLogin = this.accSrv.accLogin;

  }

  onNoClick(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(CheckoutDialogComponent, {
      height: '400px',
      width: '600px',
    });
  }

  public complete() {
    alert('Đơn hàng của bạn đã được thêm vào hàng chờ duyệt!')
    //set list products on cart - luu local key: userID
    if(localStorage.getItem(`${this.accLogin.userId}`)) {
      this.listWhenCancel = JSON.parse(`${localStorage.getItem(`${this.accLogin.userId}`)}`);
    }

    let listIdToRemove: any[] = [];
    this.listCheckout.forEach((ele: any) => listIdToRemove.push(ele['id']));

    let newList: any[] = this.listWhenCancel.filter((ele: any) => {
      return (!listIdToRemove.includes(ele['id']));
    });

    localStorage.setItem(`${this.accLogin.userId}`, JSON.stringify(newList));

    //set sold
    this.listCheckout.forEach((ele: any) => {
      this.setSold(ele, ele['type']);
    })

    //back to homepage
    this.router.navigate(['']);
  }

  private setSold(product: CartItem, type: string) {
    switch(type) {
      case 'phone': {
        let listProduct: any[] = this.proSrv.listPhone;
        let productToSet = listProduct.find((ele:any) => ele['description'] === product['description']);
        productToSet['sold'] += product['quantity'];

        this.proSrv.setListPhone(listProduct);
        localStorage.setItem('listPhone', JSON.stringify(listProduct));
        break;
      }
      case 'laptop': {
        let listProduct: any[] = this.proSrv.listLaptop;
        let productToSet = listProduct.find((ele:any) => ele['description'] === product['description']);
        productToSet['sold'] += product['quantity'];
        this.proSrv.setListLaptop(listProduct);
        localStorage.setItem('listLaptop', JSON.stringify(listProduct));
        break;
      }
      case 'tablet': {
        let listProduct: any[] = this.proSrv.listTablet;
        let productToSet = listProduct.find((ele:any) => ele['description'] === product['description']);
        productToSet['sold'] += product['quantity'];
        this.proSrv.setListTablet(listProduct);
        localStorage.setItem('listTablet', JSON.stringify(listProduct));

        break;
      }
      case 'watch': {
        let listProduct: any[] = this.proSrv.listWatch;
        let productToSet = listProduct.find((ele:any) => ele['description'] === product['description']);
        productToSet['sold'] += product['quantity'];
        this.proSrv.setListWatch(listProduct);
        localStorage.setItem('listWatch', JSON.stringify(listProduct));
        break;
      }
    }
  }
}

