import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from 'src/components/single/agenda/agenda.component';
import { InvitacionesPendientesComponent } from 'src/components/single/InvitacionesPendientes/InvitacionesPendientes.component';
import { MisEventosComponent } from 'src/components/single/mis-eventos/mis-eventos.component';
import { OrganizadosPorMiComponent } from 'src/components/single/OrganizadosPorMi/OrganizadosPorMi.component';
import { PerfilComponent } from 'src/components/single/perfil/perfil.component';
import { NuevoEventoComponent } from 'src/components/single/nuevo-evento/nuevo-evento.component';

export const routes: Routes = [
  { path: '', redirectTo: "misEventos/agenda", pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent },
  {
    path: 'misEventos', component: MisEventosComponent, children: [
      { path: 'agenda', component: AgendaComponent },
      { path: 'pendientes', component: InvitacionesPendientesComponent },
      { path: 'organizadosPorMi', component: OrganizadosPorMiComponent },
      { path: 'nuevoEvento/:tipo', component: NuevoEventoComponent }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
