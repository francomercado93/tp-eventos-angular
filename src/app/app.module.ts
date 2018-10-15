import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import { FiltroTablaComponent } from './single/filtro-tabla/filtro-tabla.component';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './share/toolbar/toolbar.component';
import { SidenavEventosComponent } from './sidenav-eventos/sidenav-eventos.component';
import { AgendaComponent } from './single/agenda/agenda.component';


@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        SidenavEventosComponent,
        AgendaComponent,
        SidenavEventosComponent,
        FiltroTablaComponent

    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatGridListModule,
        MatTableModule,
        MatFormFieldModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
