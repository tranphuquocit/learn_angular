import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DetailPageComponent } from './layouts/detail-page/detail-page.component';
import { DetailRoutingModule } from './detail.routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { DetailComponent } from './components/detail/detail.component';
import { CommonModule } from '@angular/common';


const COMPONENT = [
  MenuComponent,
  DetailComponent
]

@NgModule({
  declarations: [
    DetailPageComponent, ...COMPONENT
  ],
  imports: [
    CommonModule,
    DetailRoutingModule
  ],
  providers: [],
  bootstrap: [DetailPageComponent]
})
export class DetailModule { }
