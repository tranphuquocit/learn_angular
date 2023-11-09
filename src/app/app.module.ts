import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ColorContentComponent } from './component/color-content/color-content.component';
import { BtnCalculatorComponent } from './component/btn-calculator/btn-calculator.component';
import { RecordComponent } from './component/record/record.component';
import { FormsModule } from '@angular/forms';

const COMPONENT = [
  ColorContentComponent,
  BtnCalculatorComponent,
  RecordComponent
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
