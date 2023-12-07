import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { InputInfoComponent } from './components/input-info/input-info.component';
import { ChartComponent } from './components/chart/chart.component';

const COMPONENT = [
  ChartComponent,
  InputInfoComponent
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
