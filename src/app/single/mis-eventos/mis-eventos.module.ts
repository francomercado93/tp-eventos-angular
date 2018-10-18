import { NgModule } from '@angular/core';

import { SidenavEventosComponent } from './sidenav-eventos/sidenav-eventos.component';
import { AgendaComponent } from './agenda/agenda.component';
import { InvitacionesPendientesComponent } from './InvitacionesPendientes/InvitacionesPendientes.component';
import { MisEventosComponent } from './mis-eventos.component';
import { MisEventosRoutingModule } from './mis-eventos-routing.module';
import { OrganizadosPorMiModule } from './OrganizadosPorMi/OrganizadosPorMi.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MisEventosRoutingModule,
    OrganizadosPorMiModule
  ],
  declarations: [
    MisEventosComponent,
    AgendaComponent,
    InvitacionesPendientesComponent,
    SidenavEventosComponent,
  ]
})
export class MisEventosModule { }
