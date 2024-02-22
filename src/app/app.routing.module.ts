import { Route, Router, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./layouts/home/home.component";
import { AdminComponent } from "./layouts/admin/admin.component";
import { NgModule } from "@angular/core";
import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";
import { DetailProductComponent } from "./components/detail-product/detail.product.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'detail/:name/:id',
    component: DetailProductComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
