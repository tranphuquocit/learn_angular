import { NgModule } from '@angular/core';
import { CartPageComponent } from './layouts/cart-page/cart-page.component';
import { CartComponent } from './components/cart/cart.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartRoutingModule } from './cart.routing.module';


const COMPONENT = [
  CartComponent,
  MenuComponent
]

@NgModule({
  declarations: [
    CartPageComponent, COMPONENT
  ],
  imports: [
    CartRoutingModule
  ],
  providers: [],
  bootstrap: [CartPageComponent]
})
export class CartModule { }
