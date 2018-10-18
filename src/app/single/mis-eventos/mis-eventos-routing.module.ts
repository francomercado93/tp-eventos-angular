import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { MisEventosComponent } from './mis-eventos.component';
import { AgendaComponent } from './agenda/agenda.component';
import { InvitacionesPendientesComponent } from './InvitacionesPendientes/InvitacionesPendientes.component';
import { OrganizadosPorMiComponent } from './OrganizadosPorMi/OrganizadosPorMi.component';
import { NuevoEventoAbiertoComponent } from './OrganizadosPorMi/nuevo-evento-abierto/nuevo-evento-abierto.component';

const misEventosRoutes: Routes = [
  {
    path: 'misEventos', component: MisEventosComponent, children: [
      { path: 'agenda', component: AgendaComponent },
      { path: 'pendientes', component: InvitacionesPendientesComponent },
      { path: 'organizadosPorMi', component: OrganizadosPorMiComponent },
      {path: 'nuevo-evento-abierto', component: NuevoEventoAbiertoComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(misEventosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MisEventosRoutingModule { }
