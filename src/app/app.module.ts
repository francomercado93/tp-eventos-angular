import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import { AgendaComponent } from './single/agenda/agenda.component';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './share/toolbar/toolbar.component';
import { SidenavEventosComponent } from './sidenav-eventos/sidenav-eventos.component';
import { PerfilComponent } from './single/perfil/perfil.component';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        PerfilComponent,
        SidenavEventosComponent,
        AgendaComponent,
        SidenavEventosComponent

    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatGridListModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
