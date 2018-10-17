import { MisEventosComponent } from './single/mis-eventos/mis-eventos.component';
import { NuevoEventoAbiertoComponent } from './single/nuevo-evento-abierto/nuevo-evento-abierto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AgendaComponent } from './single/mis-eventos/agenda/agenda.component';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './share/toolbar/toolbar.component';
import { SidenavEventosComponent } from './single/mis-eventos/sidenav-eventos/sidenav-eventos.component';
import { PerfilComponent } from './single/perfil/perfil.component';
import { AmigosMiPerfilComponent } from './single/amigosMiPerfil/amigosMiPerfil.component';
import { InvitacionesPendientesComponent } from'./single/mis-eventos/InvitacionesPendientes/InvitacionesPendientes.component';
import { OrganizadosPorMiComponent } from './single/mis-eventos/OrganizadosPorMi/OrganizadosPorMi.component';

export const routes: Routes = [
    
  { path: '',    redirectTo: "/misEventos/agenda" , pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent  },
  { path: 'misEventos', component: MisEventosComponent  },
  { path: 'misEventos/agenda', component: AgendaComponent  },
  { path: 'misEventos/pendientes', component:InvitacionesPendientesComponent  },
  { path: 'misEventos/organizadosPorMi', component:OrganizadosPorMiComponent  },
  { path: 'misEventos/nuevo-evento-abierto', component:NuevoEventoAbiertoComponent  },
  { path: '**',    redirectTo: '/misEventos/agenda' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ PerfilComponent,  AgendaComponent, InvitacionesPendientesComponent,  OrganizadosPorMiComponent,NuevoEventoAbiertoComponent ]