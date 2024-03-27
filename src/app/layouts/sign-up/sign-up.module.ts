import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up.component';
import { SignUpRoutingModule } from './sign-up.routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

const COMPONENT = [

]

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    FormsModule,
    MatIconModule,
    SignUpRoutingModule
  ],
  providers: [],
  bootstrap: [SignUpComponent]
})
export class SignUpModule { }
