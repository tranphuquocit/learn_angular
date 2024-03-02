import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DetailPageComponent } from './layouts/detail-page/detail-page.component';
import { DetailRoutingModule } from './detail.routing.module';


const COMPONENT = [
]

@NgModule({
  declarations: [
    DetailPageComponent
  ],
  imports: [
    DetailRoutingModule
  ],
  providers: [],
  bootstrap: [DetailPageComponent]
})
export class DetailModule { }
