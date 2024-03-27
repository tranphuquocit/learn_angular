import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordRoutingModule } from './forgot-password.routing.module';

const COMPONENT = [

]

@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    FormsModule,
    MatIconModule,
    ForgotPasswordRoutingModule
  ],
  providers: [],
  bootstrap: [ForgotPasswordComponent]
})
export class ForgotPasswordModule { }
