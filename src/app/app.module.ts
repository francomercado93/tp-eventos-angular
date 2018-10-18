import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToolbarComponent } from './share/toolbar/toolbar.component';
import { PerfilComponent } from './single/perfil/perfil.component';
import { AmigosMiPerfilComponent } from './single/amigosMiPerfil/amigosMiPerfil.component';


import { MisEventosModule } from './single/mis-eventos/mis-eventos.module';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';



@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        PerfilComponent,
        AmigosMiPerfilComponent,
    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatGridListModule,
        MatTableModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        MisEventosModule,
        AppRoutingModule,

    ],
    providers: [MatDatepickerModule],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
