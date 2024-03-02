import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BannerDetailComponent } from "./components/banner-detail/banner-detail.component";
import { DetailRoutingModule } from './detail.routing.module';
import { DetailPageComponent } from './layouts/detail-page/detail-page.component';

const COMPONENT = [
  BannerDetailComponent
]

@NgModule({
  declarations: [
    DetailPageComponent, ...COMPONENT
  ],
  imports: [
    DetailRoutingModule
  ],
  providers: [],
  bootstrap: [DetailPageComponent]
})
export class DetailModule { }
