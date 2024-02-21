import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { CongTruComponent } from './components/congtru/congtru.component';
import { NhanChiaComponent } from './components/nhanchia/nhanchia.component';

const COMPONENT = [
  CongTruComponent,
  NhanChiaComponent,
]

@NgModule({
  declarations: [
    AppComponent, ...COMPONENT
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
