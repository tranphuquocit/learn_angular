import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { InputColorComponent } from './component/input-color/input-color.component';
import { ViewComponent } from './component/view/view.component';

const COMPONENT = [
  InputColorComponent,
  ViewComponent
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
