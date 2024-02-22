import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './layouts/home/home.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AppRoutingModule } from './app.routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { FavouriteProduct } from './components/favourite-product/favourite-product.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuProductComponent } from './components/menu-product/menu-product.component';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailProductComponent } from './components/detail-product/detail.product.component';

const COMPONENT = [
  HomeComponent,
  AdminComponent,
  BannerComponent,
  FavouriteProduct,
  MenuComponent,
  MenuProductComponent,
  ProductComponent,
  AboutComponent,
  ContactComponent,
  DetailProductComponent,
]

@NgModule({
  declarations: [
    AppComponent, ...COMPONENT
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
