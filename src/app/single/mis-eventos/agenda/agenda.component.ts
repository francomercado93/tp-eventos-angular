import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/model/evento';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  eventosHoy: Array<Evento> = []
  hoy: Date
  constructor(private eventoService: EventosService) {
  }

  ngOnInit(): void {
    this.hoy = new Date(2018,6,5)
    this.eventosHoy = this.eventoService.eventos.filter(evento => evento.inicioEvento.getTime === this.hoy.getTime)
  }
}
