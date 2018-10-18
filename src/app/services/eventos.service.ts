import { Injectable } from '@angular/core';
import { Evento } from "src/model/evento";


@Injectable({
  providedIn: 'root'
})

export class EventosService {

  eventos: Array<Evento>;

  fechaInicio: Date
  constructor() {
    // this.fechaInicio = new Date(2018, 08, 25, 16, 30)
    this.eventos = [
      new Evento('Cumple pepe', 'Casa de Manolo', 'Manolo'),
      new Evento('Recital Pepo', 'Bar 3', 'Manager')
    ]
  }
}
