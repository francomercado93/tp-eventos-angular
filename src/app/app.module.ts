import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { EventoComponent } from './evento/evento.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';


import 'hammerjs';
import { ToolbarComponent } from './share/toolbar/toolbar.component';
import { PerfilComponent } from './single/perfil/perfil.component';
@NgModule({
    declarations: [
        AppComponent,
        UsuarioComponent,
        EventoComponent,
        EventoComponent,
        ToolbarComponent,
        PerfilComponent

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
