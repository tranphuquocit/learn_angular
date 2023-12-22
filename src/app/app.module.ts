import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/item/item.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';

const COMPONENT = [
  HeaderComponent,
  ItemComponent,
  MainContentComponent,
  MainHeaderComponent
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
