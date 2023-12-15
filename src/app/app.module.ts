import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ChartComponent } from './components/chart/chart.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';

const COMPONENT = [
  ListComponent,
  ChartComponent,
  InputComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ... COMPONENT
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
