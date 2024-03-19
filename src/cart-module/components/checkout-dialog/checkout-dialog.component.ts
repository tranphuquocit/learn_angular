import { Component } from "@angular/core";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule],
})



export class CheckoutDialogComponent {


  data = {};

  constructor(public dialogRef: MatDialogRef<CheckoutDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
