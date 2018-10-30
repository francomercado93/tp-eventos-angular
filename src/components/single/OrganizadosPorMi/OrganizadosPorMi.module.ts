import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import { OrganizadosPorMiComponent } from './OrganizadosPorMi.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        OrganizadosPorMiComponent,
    ],
    imports: [
        BrowserModule,
        MatButtonModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [
        OrganizadosPorMiComponent,
    ]
})

export class OrganizadosPorMiModule { }
