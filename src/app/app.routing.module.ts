import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CongTruComponent } from "./components/congtru/congtru.component";
import { NhanChiaComponent } from "./components/nhanchia/nhanchia.component";

const routes: Routes = [
  {
    path: 'congtru',
    component: CongTruComponent
  },
  {
    path: 'nhanchia',
    component: NhanChiaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
