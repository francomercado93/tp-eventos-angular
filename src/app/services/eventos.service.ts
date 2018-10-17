import { Injectable } from '@angular/core';
import { Evento } from "src/model/evento";


@Injectable({
  providedIn: 'root'
})
export class EventosService {

  unEvento: Evento; 
  constructor() { 
    this.unEvento = new Evento('HOLAAAA');
  }

}
