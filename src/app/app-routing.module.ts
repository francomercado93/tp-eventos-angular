import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AgendaComponent } from './single/agenda/agenda.component';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './share/toolbar/toolbar.component';
import { SidenavEventosComponent } from './sidenav-eventos/sidenav-eventos.component';
import { PerfilComponent } from './single/perfil/perfil.component';
import { AmigosMiPerfilComponent } from './single/amigosMiPerfil/amigosMiPerfil.component';
import { InvitacionesPendientesComponent } from'./single/InvitacionesPendientes/InvitacionesPendientes.component';
import { OrganizadosPorMiComponent } from './single/OrganizadosPorMi/OrganizadosPorMi.component';

export const routes: Routes = [
    
  { path: '',    redirectTo: "/misEventos/agenda" , pathMatch: 'full' },
  { path: 'perfil', component: PerfilComponent  },
  { path: 'misEventos/agenda', component: AgendaComponent  },
  { path: 'misEventos/pendientes', component:InvitacionesPendientesComponent  },
  { path: 'misEventos/organizadosPorMi', component:OrganizadosPorMiComponent  },
  { path: '**',    redirectTo: '/misEventos/agenda' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ PerfilComponent,  AgendaComponent, InvitacionesPendientesComponent,  OrganizadosPorMiComponent ]