import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { HomeRoutingModule } from './home.routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { FavouriteProductComponent } from './components/favourite-product/favourite-product.component';
import { MenuProductComponent } from './components/menu-product/menu-product.component';
import { ProductComponent } from './components/product/product.component';


const COMPONENT = [
  BannerComponent,
  AboutComponent,
  ContactComponent,
  MenuComponent,
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
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class HomeModule { }
