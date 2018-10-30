import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { Evento } from 'src/model/domain/evento/evento';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  providers: [EventosService]
})
export class AgendaComponent implements OnInit {

  eventosHoy: Array<Evento> = [];
  eventosEstaSemana: Array<Evento> = []
  eventosProximos: Array<Evento> = []
  errors = [];

  constructor(private eventoService: EventosService) {
  }

  ngOnInit(): void {
    // this.eventosHoy = this.eventoService.eventosHoy
    // this.eventosEstaSemana = this.eventoService.eventosEstaSemana
    // this.eventosProximos = this.eventoService.eventosProximos
  }
}

