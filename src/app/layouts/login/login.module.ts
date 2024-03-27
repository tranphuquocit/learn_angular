import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './layouts/login-page/login-page.component';
import { LoginRoutingModule } from './login.routing.module';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../../components/header/header.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


const COMPONENT = [
  LoginComponent,
]

@NgModule({
  declarations: [
    LoginPageComponent, ...COMPONENT
  ],
  imports: [
    FormsModule,
    CommonModule,
    HeaderModule,
    MatIconModule,
    LoginRoutingModule
  ],
  providers: [],
  bootstrap: [LoginPageComponent]
})
export class LoginModule { }
