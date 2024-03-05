import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './layouts/login-page/login-page.component';
import { LoginRoutingModule } from './login.router.module';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '../menu-module/menu.module';
import { CommonModule } from '@angular/common';


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
    MenuModule,
    LoginRoutingModule
  ],
  providers: [],
  bootstrap: [LoginPageComponent]
})
export class LoginModule { }
