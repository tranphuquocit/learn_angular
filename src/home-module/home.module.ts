import { NgModule } from '@angular/core';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { HomeRoutingModule } from './home.routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FavouriteProductComponent } from './components/favourite-product/favourite-product.component';
import { MenuProductComponent } from './components/menu-product/menu-product.component';
import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'src/menu-module/menu.module';


const COMPONENT = [
  BannerComponent,
  AboutComponent,
  ContactComponent,
  BannerComponent,
  FavouriteProductComponent,
  MenuProductComponent,
  ProductComponent
]

@NgModule({
  declarations: [
    HomePageComponent, ...COMPONENT
  ],
  imports: [
    CommonModule,
    MenuModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class HomeModule { }
