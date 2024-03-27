import { NgModule } from '@angular/core';
import { DetailPageComponent } from './layouts/detail-page/detail-page.component';
import { DetailRoutingModule } from './detail.routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'src/app/components/header/header.module';
import { MatIconModule } from '@angular/material/icon';


const COMPONENT = [
  DetailComponent
]

@NgModule({
  declarations: [
    DetailPageComponent, ...COMPONENT
  ],
  imports: [
    CommonModule,
    HeaderModule,
    DetailRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [DetailPageComponent]
})
export class DetailModule { }
