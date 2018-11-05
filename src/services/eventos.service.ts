import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Evento } from 'src/model/domain/evento/evento';
import { REST_SERVER_URL, USRTESTID } from 'src/app/configuration';

@Injectable({
  providedIn: 'root'
})

export class EventosService {
  agenda: Array<Evento> = []


  constructor(private http: Http) { }

  async getAgendaUsuarioById(id: number): Promise<any> {
    const res = await this.http.get(REST_SERVER_URL + "/usuarios/" + id + "/agenda").toPromise()
    return res.json().map(Evento.fromJson)
  }
  // async obtenerEventosHoy() {
  //   this.agenda = await this.getAgendaUsuarioById(USRTESTID)
  //   return this.agenda.filter[evento => evento.inicioEvento.getFullYear() == new Date(2018, 6, 5).getFullYear()]
  // }

  async actualizarEventosOrganizadosUsuario(id: number, evento: Evento) {
    return this.http.put(REST_SERVER_URL + "/usuarios/" + id + "/nuevoeventoabierto", evento.toJSON()).toPromise()
  }

  async getEventosOrganizadosUsuarioById(id: number): Promise<any> {
    const res = await this.http.get(REST_SERVER_URL + "/usuarios/" + id + "/organizadosPorMi").toPromise()
    return res.json().map(Evento.fromJson)
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
  return new Date(2018, 5, 5, 12, 35)
}