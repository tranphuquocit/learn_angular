import { NgModule } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';

const COMPONENT = [
]

@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class MenuModule { }
