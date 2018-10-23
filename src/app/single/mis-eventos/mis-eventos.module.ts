import { NgModule } from '@angular/core';

import { SidenavEventosComponent } from './sidenav-eventos/sidenav-eventos.component';
import { InvitacionesPendientesComponent } from './InvitacionesPendientes/InvitacionesPendientes.component';
import { MisEventosComponent } from './mis-eventos.component';
import { MisEventosRoutingModule } from './mis-eventos-routing.module';
import { OrganizadosPorMiModule } from './OrganizadosPorMi/OrganizadosPorMi.module';
import { CommonModule } from '@angular/common';
import { AgendaModule } from './agenda/agenda.module';

@NgModule({
  imports: [
    CommonModule,
    AgendaModule,
    MisEventosRoutingModule,
    OrganizadosPorMiModule
  ],
  declarations: [
    MisEventosComponent,
    InvitacionesPendientesComponent,
    SidenavEventosComponent,
  ]
})
export class MisEventosModule { }
