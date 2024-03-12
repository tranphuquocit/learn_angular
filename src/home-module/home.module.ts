import { NgModule } from '@angular/core';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { HomeRoutingModule } from './home.routing.module';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FavouriteProductComponent } from './components/favourite-product/favourite-product.component';
import { MenuProductComponent } from './components/menu-product/menu-product.component';
import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'src/menu-module/menu.module';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'src/carousel-module/carousel.module';

const COMPONENT = [
  AboutComponent,
  ContactComponent,
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
    FormsModule,
    MenuModule,
    CarouselModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class HomeModule { }
