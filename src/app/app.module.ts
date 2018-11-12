import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { ToolbarComponent } from 'src/components/share/toolbar/toolbar.component';
import { MisEventosModule } from 'src/components/single/mis-eventos/mis-eventos.module';
import { PerfilComponent } from 'src/components/single/perfil/perfil.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        PerfilComponent,
    ],
    imports: [
        CommonModule,
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
        HttpModule,
        MatSnackBarModule,
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
