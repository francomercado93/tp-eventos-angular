import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/model/evento';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  eventos: Array<Evento>=[]

  constructor(private eventoService: EventosService) {
  }

  ngOnInit(): void {
    this.eventos = this.eventoService.eventos
  }


}
