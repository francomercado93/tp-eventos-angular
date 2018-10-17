import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import { AgendaComponent } from './single/mis-eventos/agenda/agenda.component';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './share/toolbar/toolbar.component';
import { SidenavEventosComponent } from './single/mis-eventos/sidenav-eventos/sidenav-eventos.component';
import { PerfilComponent } from './single/perfil/perfil.component';
import {MatTableModule} from '@angular/material/table';
import { AmigosMiPerfilComponent } from './single/amigosMiPerfil/amigosMiPerfil.component';
import { InvitacionesPendientesComponent } from'./single/mis-eventos/InvitacionesPendientes/InvitacionesPendientes.component';
import { OrganizadosPorMiComponent } from './single/mis-eventos/OrganizadosPorMi/OrganizadosPorMi.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { NuevoEventoAbiertoComponent } from './single/nuevo-evento-abierto/nuevo-evento-abierto.component'
import { MatDatepickerModule, MatNativeDateModule  } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MisEventosComponent } from './single/mis-eventos/mis-eventos.component';



@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        PerfilComponent,
        SidenavEventosComponent,
        AgendaComponent,
        SidenavEventosComponent,
        AmigosMiPerfilComponent,
        InvitacionesPendientesComponent,
        OrganizadosPorMiComponent,
        routingComponents,
        NuevoEventoAbiertoComponent,
        MisEventosComponent

    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatGridListModule,
        MatTableModule,
        AppRoutingModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        BrowserAnimationsModule
        
    ],
    providers: [MatDatepickerModule],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
