import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '../home-module/home.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../home-module/home.module').then(m => m.HomeModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('../detail-module/detail.module').then(m => m.DetailModule)
  },
  // {
  //   path: 'cart',
  //   loadChildren: () => import('../cart-module/cart.module').then(m => m.CartModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('../login-module/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
