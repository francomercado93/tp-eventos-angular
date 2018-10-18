import { Injectable } from '@angular/core';
import { Evento } from "src/model/evento";
import { EVENTOS } from 'src/model/eventosStub';


@Injectable({
  providedIn: 'root'
})

export class EventosService {

  eventos: Evento[]

  constructor() {
    this.eventos = EVENTOS
  }

  // eventosHoy() {
  //   return this.eventos
  // }
}
