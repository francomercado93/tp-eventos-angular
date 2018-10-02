import { Component, Input } from '@angular/core';
import { Evento } from './evento.domain';

@Component({selector: 'app-evento', templateUrl: './evento.component.html', styleUrls: ['./evento.component.css']})
export class EventoComponent {

  @Input() evento : Evento



}