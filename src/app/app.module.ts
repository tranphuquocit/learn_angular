import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeadingComponent } from './components/heading/heading.component';
import { TableComponent } from './components/table/table.component';
import { ItemComponent } from './components/item/item.component';

const COMPONENT = [
  HeadingComponent,
  TableComponent,
  ItemComponent,
]

@NgModule({
  declarations: [
    AppComponent, ...COMPONENT
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
