import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/model/domain/evento/evento';
import { EventosService } from 'src/services/eventos.service';

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
  constructor(){
    
  }
  // constructor(private eventoService: EventosService) {
  // }

  ngOnInit(): void {
    // this.eventosHoy = this.eventoService.eventosHoy
    // this.eventosEstaSemana = this.eventoService.eventosEstaSemana
    // this.eventosProximos = this.eventoService.eventosProximos
  }
}

