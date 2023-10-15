import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PerfilComponent} from "./perfil/perfil.component";
import {PilaresComponent} from "./pilares/pilares.component";
import {RedesComponent} from "./redes/redes.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'inicio',component:HomeComponent},
  {path:'perfil',component:PerfilComponent},
  {path:'pilares',component: PilaresComponent},
  {path:'redes',component:RedesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
