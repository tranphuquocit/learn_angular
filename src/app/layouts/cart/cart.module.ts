import { NgModule } from '@angular/core';
import { CartPageComponent } from './layouts/cart-page/cart-page.component';
import { CartComponent } from './components/cart/cart.component';
import { CartRoutingModule } from './cart.routing.module';
import { CommonModule, NgIf } from '@angular/common';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { MatIconModule } from '@angular/material/icon';


const COMPONENT = [
  CartComponent,
]

@NgModule({
  declarations: [
    CartPageComponent, ...COMPONENT
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    CartRoutingModule,
    MatDialogModule,
    FooterModule,
    MatIconModule
    // BrowserModule,
    // BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [CartPageComponent]
})
export class CartModule { }
