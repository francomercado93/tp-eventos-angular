import { Pipe, PipeTransform } from '@angular/core';
import { Evento } from 'src/model/domain/evento/evento';
import { fechaHoy } from 'src/services/eventos.service';

@Pipe({
  name: 'agenda'
})
export class AgendaPipe implements PipeTransform {

  transform(eventos: Array<Evento>, nombreABuscar: String): any {
    return eventos.filter(evento => evento.inicioEvento.getFullYear() == fechaHoy().getFullYear())
  }


}
