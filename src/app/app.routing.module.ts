import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './layouts/home/home.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layouts/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./layouts/detail-product/detail.module').then(m => m.DetailModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./layouts/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./layouts/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./layouts/sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./layouts/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
