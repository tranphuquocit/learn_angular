import { NgModule } from '@angular/core';
import { CartPageComponent } from './layouts/cart-page/cart-page.component';
import { CartComponent } from './components/cart/cart.component';
import { CartRoutingModule } from './cart.routing.module';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'src/menu-module/menu.module';
import { FormsModule } from '@angular/forms';


const COMPONENT = [
  CartComponent,
]

@NgModule({
  declarations: [
    CartPageComponent, COMPONENT
  ],
  imports: [
    CommonModule,
    FormsModule,
    MenuModule,
    CartRoutingModule
  ],
  providers: [],
  bootstrap: [CartPageComponent]
})
export class CartModule { }
