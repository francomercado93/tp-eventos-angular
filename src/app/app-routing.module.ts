import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './single/perfil/perfil.component';

export const routes: Routes = [
  { path: '',    redirectTo: "perfil" , pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }