import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { ToolbarComponent } from 'src/components/share/toolbar/toolbar.component';
import { MisEventosModule } from 'src/components/single/mis-eventos/mis-eventos.module';
import { PerfilModule } from 'src/components/single/perfil/perfil.module';
import { AgendaModule } from 'src/components/single/agenda/agenda.module';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
    ],
    imports: [
        CommonModule,
        // AgendaModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatGridListModule,
        MatTableModule,
        BrowserAnimationsModule,
        MisEventosModule,
        PerfilModule,
        HttpModule,
        AppRoutingModule,

    ],
    providers: [
        // MatDatepickerModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
