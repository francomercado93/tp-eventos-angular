import { Component, OnInit, Input } from '@angular/core';
import { Evento } from 'src/model/domain/evento/evento';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css']
})
export class EventoDetailComponent {

  @Input() evento: Evento

}
