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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
