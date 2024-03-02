import { NgModule } from '@angular/core';
import { BannerComponent } from "./components/banner/banner.component";
import { HomeRoutingModule } from "./home.routing.module";
import { HomePageComponent } from './layouts/home-page/home-page.component';

const COMPONENT = [
  BannerComponent
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
