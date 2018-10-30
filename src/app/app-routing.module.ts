import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from 'src/components/single/perfil/perfil.component';
import { MisEventosComponent } from 'src/components/single/mis-eventos/mis-eventos.component';
import { AgendaComponent } from 'src/components/single/agenda/agenda.component';
import { InvitacionesPendientesComponent } from 'src/components/single/InvitacionesPendientes/InvitacionesPendientes.component';
import { OrganizadosPorMiComponent } from 'src/components/single/OrganizadosPorMi/OrganizadosPorMi.component';
import { NuevoEventoAbiertoComponent } from 'src/components/single/nuevo-evento-abierto/nuevo-evento-abierto.component';
import { NuevoEventoCerradoComponent } from 'src/components/single/nuevoEventoCerrado/nuevoEventoCerrado.component';

export const routes: Routes = [
  { path: '', redirectTo: "misEventos/agenda", pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent },
  {
    path: 'misEventos', component: MisEventosComponent, children: [
      { path: 'agenda', component: AgendaComponent },
      { path: 'pendientes', component: InvitacionesPendientesComponent },
      { path: 'organizadosPorMi', component: OrganizadosPorMiComponent },
      { path: 'nuevoEventoAbierto', component: NuevoEventoAbiertoComponent },
      { path: 'nuevoEventoCerrado', component: NuevoEventoCerradoComponent }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
