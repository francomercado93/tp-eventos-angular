import { Component, OnInit } from '@angular/core';
import { EventosService } from "src/app/services/eventos.service";
import { Evento } from "src/model/evento";

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.css']
})
export class MisEventosComponent implements OnInit {

  eventoComponente = '';
  constructor(private eventoService :EventosService) { 
   
   
  }

  ngOnInit() {
    console.log(this.eventoService.unEvento.nombre);
    this.eventoComponente = this.eventoService.unEvento.nombre;
  }

}
