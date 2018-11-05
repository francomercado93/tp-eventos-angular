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
import { MisEventosComponent } from './mis-eventos.component';
import { NuevoEventoAbiertoComponent } from '../nuevo-evento-abierto/nuevo-evento-abierto.component';
import { SidenavEventosComponent } from '../sidenav-eventos/sidenav-eventos.component';
import { AgendaComponent } from '../agenda/agenda.component';
import { InvitacionesPendientesComponent } from '../InvitacionesPendientes/InvitacionesPendientes.component';
import { OrganizadosPorMiModule } from '../OrganizadosPorMi/OrganizadosPorMi.module';
import { NuevoEventoCerradoComponent } from '../nuevoEventoCerrado/nuevoEventoCerrado.component';
import { AgendaModule } from '../agenda/agenda.module';

@NgModule({
  declarations: [
    MisEventosComponent,
    NuevoEventoAbiertoComponent,
    NuevoEventoCerradoComponent,
    SidenavEventosComponent,
    MisEventosComponent,
    // AgendaComponent,
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
    AgendaModule,
    MatTableModule,
    RouterModule,
  ],
})
export class MisEventosModule { }
