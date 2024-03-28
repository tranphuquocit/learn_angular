import { NgModule } from '@angular/core';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { HomeRoutingModule } from './home.routing.module';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FavouriteProductComponent } from './components/favourite-product/favourite-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdsComponent } from './components/advertise/advertise.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

const COMPONENT = [
  AboutComponent,
  ContactComponent,
  FavouriteProductComponent,
  ListProductComponent,
  ProductComponent,
  BannerComponent,
  MenuComponent,
  AdsComponent,
]

@NgModule({
  declarations: [
    HomePageComponent, ...COMPONENT
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    FooterModule,
    MatIconModule,
    HttpClientModule,
    HomeRoutingModule,
  ],
  exports: [
    ProductComponent
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class HomeModule { }
