import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { CommonModule } from '@angular/common';


const COMPONENT = [
]

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent
  ],
  providers: [],
  bootstrap: [CarouselComponent]
})
export class CarouselModule { }
