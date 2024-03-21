import { NgModule } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class MenuModule { }
