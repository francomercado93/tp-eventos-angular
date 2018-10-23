import { Injectable } from '@angular/core';
import { Evento } from 'src/model/domain/evento/evento';
import { EVENTOS } from 'src/model/domain/juegoDatos/eventosStub';


@Injectable({
  providedIn: 'root'
})

export class EventosService {

  eventos: Evento[]
  hoy: Date;

  constructor() {
    this.eventos = EVENTOS
  }

  get eventosHoy() {
    return this.eventos.filter(evento => evento.inicioEvento.getDate() == this.fechaHoy.getDate())
  }

  get eventosEstaSemana() {//revisar
    return this.eventos.filter(evento =>
      ((this.fechaHoy.getTime() - evento.inicioEvento.getTime() >= -432000000
      && this.fechaHoy.getTime() - evento.inicioEvento.getTime() <= 0 )||
      (this.fechaHoy.getTime() - evento.inicioEvento.getTime() <= 432000000 &&
        this.fechaHoy.getTime() - evento.inicioEvento.getTime() >= 0))
    )
  }

  get eventosProximos() {
    return this.eventos.filter(evento =>
      evento.inicioEvento.getTime() >= this.fechaHoy.getTime() + 432000000)
  }

  get fechaHoy() {
    return new Date(2018, 6, 5)
  }
}

