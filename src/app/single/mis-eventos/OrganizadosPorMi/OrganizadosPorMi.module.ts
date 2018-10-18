
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';

import { MatTableModule } from '@angular/material/table';

import { OrganizadosPorMiComponent } from './OrganizadosPorMi.component';
import { NuevoEventoAbiertoComponent } from './nuevo-evento-abierto/nuevo-evento-abierto.component';

@NgModule({
    declarations: [
        OrganizadosPorMiComponent,
        NuevoEventoAbiertoComponent
    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatGridListModule,
        MatTableModule,
    ],
    providers: [],
    bootstrap: [
        OrganizadosPorMiComponent
    ]
})

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [OrganizadosPorMiComponent, NuevoEventoAbiertoComponent]
})
export class OrganizadosPorMiModule { }
