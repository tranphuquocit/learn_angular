import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './layouts/detail-page/detail-page.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: ':name/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
