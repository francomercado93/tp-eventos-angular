import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MyDatePickerModule } from 'mydatepicker';
import { AgendaComponent } from '../agenda/agenda.component';
import { InvitacionesPendientesComponent } from '../InvitacionesPendientes/InvitacionesPendientes.component';
import { NuevoEventoComponent } from '../nuevo-evento/nuevo-evento.component';
import { OrganizadosPorMiModule } from '../OrganizadosPorMi/OrganizadosPorMi.module';
import { SidenavEventosComponent } from '../sidenav-eventos/sidenav-eventos.component';
import { MisEventosComponent } from './mis-eventos.component';

@NgModule({
  declarations: [
    MisEventosComponent,
    NuevoEventoComponent,
    SidenavEventosComponent,
    MisEventosComponent,
    AgendaComponent,
    InvitacionesPendientesComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    OrganizadosPorMiModule,
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
  ],
})
export class MisEventosModule { }
