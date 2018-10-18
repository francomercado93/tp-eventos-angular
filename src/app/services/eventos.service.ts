import { Injectable } from '@angular/core';
import { Evento } from "src/model/evento";


@Injectable({
  providedIn: 'root'
})

export class EventosService {

  eventos: Array<Evento>;

  constructor() {
    this.eventos = [
      new Evento('Cumple pepe', new Date(2018, 6, 5, 16, 30), 'Casa de Manolo', 'Manolo'),
      new Evento('Recital Pepo', new Date(2018, 10, 15, 19, 15), 'Bar 3', 'Manager')
    ]
  }
}
