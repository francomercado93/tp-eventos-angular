import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import { MyDatePickerModule } from 'mydatepicker';
import { ToolbarComponent } from 'src/components/share/toolbar/toolbar.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavEventosComponent } from 'src/components/single/sidenav-eventos/sidenav-eventos.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        routingComponents,
        SidenavEventosComponent
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
        HttpModule,
        AppRoutingModule,
        FormsModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserModule,
        MatButtonModule,
        RouterModule,
        MyDatePickerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule,
        MatTableModule,
        RouterModule,
        MatCardModule
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
