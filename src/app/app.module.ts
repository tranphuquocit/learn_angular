import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeadingComponent } from './components/heading/heading.component';
import { TableComponent } from './components/table/table.component';
import { ItemComponent } from './components/item/item.component';
import { AppHighlightDirective } from './directives/highlight.directive';
import { HighlightNumberDirective } from './directives/highlight-number.directive';
import { HighlightOnlyNumberDirective } from './directives/highlight-only-number.directive';
import { ConvertNumberDirective } from './directives/convert-number.directive';

const COMPONENT = [
  HeadingComponent,
  TableComponent,
  ItemComponent,
]

const DIRECTIVE = [
  AppHighlightDirective,
  HighlightNumberDirective,
  HighlightOnlyNumberDirective,
  ConvertNumberDirective
]

@NgModule({
  declarations: [
    AppComponent, ...COMPONENT, ...DIRECTIVE
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
