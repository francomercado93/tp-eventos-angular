import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EventoDetailComponent,
    AgendaComponent
  ]
})
export class AgendaModule { }
