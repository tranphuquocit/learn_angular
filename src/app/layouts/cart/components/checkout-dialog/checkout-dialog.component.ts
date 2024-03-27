import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";
import { InforDeli } from "src/app/share/share-models/infor-deli.model";
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CartComponent } from "../cart/cart.component";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { CartItem } from "src/app/share/share-models/cart-item.model";


@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, FormsModule, MatInputModule, ],
})


export class CheckoutDialogComponent {


  infoDeli: InforDeli = {
    address: '',
    phoneNumber: ''
  };

  constructor(public dialogRef: MatDialogRef<CheckoutDialogComponent>, private dialog: MatDialog)
  {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirm() {
    // console.log(this.data)
    if(this.infoDeli.address !== '' && this.infoDeli.phoneNumber !== '') {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        height: 'auto',
        width: '600px',
        data: {
          address: this.infoDeli.address,
          phoneNumber: this.infoDeli.phoneNumber,
        }
      });

    }
    else {
      alert('Vui lòng nhập đầy đủ thông tin!');
      const dialogRef = this.dialog.open(CheckoutDialogComponent, {
        height: '400px',
        width: '600px',
      });
    }
  }

}
