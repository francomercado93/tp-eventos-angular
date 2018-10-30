import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/single/perfil/perfil.component';
import { MisEventosComponent } from './components/single/mis-eventos/mis-eventos.component';
import { AgendaComponent } from './components/single/agenda/agenda.component';
import { InvitacionesPendientesComponent } from './components/single/InvitacionesPendientes/InvitacionesPendientes.component';
import { OrganizadosPorMiComponent } from './components/single/OrganizadosPorMi/OrganizadosPorMi.component';
import { NuevoEventoAbiertoComponent } from './components/single/nuevo-evento-abierto/nuevo-evento-abierto.component';

export const routes: Routes = [
  { path: '', redirectTo: "misEventos/agenda", pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent },
  {
    path: 'misEventos', component: MisEventosComponent, children: [
      { path: 'agenda', component: AgendaComponent },
      { path: 'pendientes', component: InvitacionesPendientesComponent },
      { path: 'organizadosPorMi', component: OrganizadosPorMiComponent },
      { path: 'nuevoEventoAbierto', component: NuevoEventoAbiertoComponent }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
