import { NgModule } from '@angular/core';
import { DetailPageComponent } from './layouts/detail-page/detail-page.component';
import { DetailRoutingModule } from './detail.routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'src/menu-module/menu.module';


const COMPONENT = [
  DetailComponent
]

@NgModule({
  declarations: [
    DetailPageComponent, ...COMPONENT
  ],
  imports: [
    CommonModule,
    MenuModule,
    DetailRoutingModule
  ],
  providers: [],
  bootstrap: [DetailPageComponent]
})
export class DetailModule { }
