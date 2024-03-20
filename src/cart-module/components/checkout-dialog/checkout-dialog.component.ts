import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";
import { InforDeli } from "src/share-models/infor-deli.model";
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CartComponent } from "../cart/cart.component";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";


@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, FormsModule, MatInputModule, ],
})


export class CheckoutDialogComponent {


  data: InforDeli = {
    address: '',
    phoneNumber: ''
  };

  constructor(public dialogRef: MatDialogRef<CheckoutDialogComponent>, private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public info: InforDeli) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirm() {
    // console.log(this.data)
    if(this.data.address !== '' && this.data.phoneNumber !== '') {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        height: 'auto',
        width: '600px',
        data: {
          address: this.data.address,
          phoneNumber: this.data.phoneNumber
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
