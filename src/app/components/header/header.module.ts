import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header.component';
import { MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';

const COMPONENT = [
]

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class HeaderModule { }
