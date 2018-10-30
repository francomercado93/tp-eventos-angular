import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Evento } from 'src/model/domain/evento/evento';
import { REST_SERVER_URL } from 'src/app/configuration';

@Injectable({
  providedIn: 'root'
})

export class EventosService {
  
  actualizarEventosOrganizadosUsuario(id: number, evento: Evento) {
    this.http.put(REST_SERVER_URL + "/usuarios/" + id + "/nuevoEvento/", evento.toJSON()).subscribe()
  }

  constructor(private http: Http) { }

  getEventosOrganizadosUsuarioById(id: number): Observable<any> {
    return this.http.get(REST_SERVER_URL + "/usuarios/" + id + "/organizadosPorMi").pipe(map(this.convertToEventos))
  }

  convertToEventos(res: Response) {
    return res.json().map(eventoJson => Evento.fromJson(eventoJson))
  }

}



// @Injectable({
//   providedIn: 'root'
// })

// export class StubEventosService {

//   eventos: Evento[];
//   hoy: Date;

//   constructor() {
//     this.eventos = EVENTOS

//   }

//   get eventosHoy() {
//     return this.eventos.filter(evento => evento.inicioEvento.getDate() == fechaHoy().getDate())
//   }

//   get eventosEstaSemana() {//revisar
//     return this.eventos.filter(evento =>
//       ((fechaHoy().getTime() - evento.inicioEvento.getTime() >= -432000000
//         && fechaHoy().getTime() - evento.inicioEvento.getTime() <= 0) ||
//         (fechaHoy().getTime() - evento.inicioEvento.getTime() <= 432000000 &&
//           fechaHoy().getTime() - evento.inicioEvento.getTime() >= 0))
//     )
//   }

//   get eventosProximos() {
//     return this.eventos.filter(evento =>
//       evento.inicioEvento.getTime() >= fechaHoy().getTime() + 432000000)
//   }

//   // get fechaHoy() {
//   //   return new Date(2018, 6, 5)
//   // }
// }

export function fechaHoy() {
  return new Date(2018, 6, 5)
}
