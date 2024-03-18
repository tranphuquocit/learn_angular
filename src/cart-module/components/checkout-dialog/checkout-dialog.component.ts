import { Component } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})

export class CheckoutDialogComponent {

}
