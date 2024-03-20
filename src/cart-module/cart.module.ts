import { NgModule } from '@angular/core';
import { CartPageComponent } from './layouts/cart-page/cart-page.component';
import { CartComponent } from './components/cart/cart.component';
import { CartRoutingModule } from './cart.routing.module';
import { CommonModule, NgIf } from '@angular/common';
import { MenuModule } from 'src/menu-module/menu.module';
import { FormsModule } from '@angular/forms';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from 'src/home-module/home.module';


const COMPONENT = [
  CartComponent
]

@NgModule({
  declarations: [
    CartPageComponent, ...COMPONENT
  ],
  imports: [
    CommonModule,
    FormsModule,
    MenuModule,
    CartRoutingModule,
    MatDialogModule,
    // BrowserModule,
    // BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [CartPageComponent]
})
export class CartModule { }
