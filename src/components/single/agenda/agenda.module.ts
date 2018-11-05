import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgendaComponent } from './agenda.component';
import { AgendaPipe } from './agenda.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AgendaComponent, AgendaPipe]

})
export class AgendaModule { }
