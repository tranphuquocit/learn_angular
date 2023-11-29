import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { InputInformationComponent } from './input-information/input-information';
import { ChartComponent } from './chart/chart.component';

const COMPONENT = [
  InputInformationComponent,
  ChartComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENT
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
