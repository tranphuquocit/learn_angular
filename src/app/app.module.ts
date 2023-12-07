import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { InputChartComponent } from './components/input-chart/input-chart.component';

const COMPONENT = [
  InputChartComponent
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
