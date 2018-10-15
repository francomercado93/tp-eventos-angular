
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';


//import { ToolbarComponent } from './share/toolbar/toolbar.component';


import {MatTableModule} from '@angular/material/table';


import { OrganizadosPorMiComponent } from './OrganizadosPorMi.component';

@NgModule({
    declarations: [
       
       // ToolbarComponent,

        OrganizadosPorMiComponent

    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatGridListModule,
        MatTableModule
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
  declarations: [OrganizadosPorMiComponent]
})
export class OrganizadosPorMiModule { }
