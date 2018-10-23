import { Injectable } from '@angular/core';
import { Evento } from 'src/model/domain/evento/evento';
import { EVENTOS } from 'src/model/domain/juegoDatos/eventosStub';


@Injectable({
  providedIn: 'root'
})

export class EventosService {

  eventos: Evento[];
  hoy: Date;

  constructor() {
    this.eventos = EVENTOS
    
  }

  get eventosHoy() {
    return this.eventos.filter(evento => evento.inicioEvento.getDate() == fechaHoy().getDate())
  }

  get eventosEstaSemana() {//revisar
    return this.eventos.filter(evento =>
      ((fechaHoy().getTime() - evento.inicioEvento.getTime() >= -432000000
      && fechaHoy().getTime() - evento.inicioEvento.getTime() <= 0 )||
      (fechaHoy().getTime() - evento.inicioEvento.getTime() <= 432000000 &&
      fechaHoy().getTime() - evento.inicioEvento.getTime() >= 0))
    )
  }

  get eventosProximos() {
    return this.eventos.filter(evento =>
      evento.inicioEvento.getTime() >= fechaHoy().getTime() + 432000000)
  }

  // get fechaHoy() {
  //   return new Date(2018, 6, 5)
  // }
}

export function fechaHoy(){
  return new Date(2018, 6, 5)
}
