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

  async actualizarEventosOrganizadosUsuario(id: number, evento: Evento) {
    return this.http.put(REST_SERVER_URL + "/usuarios/" + id + "/nuevoeventoabierto", evento.toJSON()).toPromise()
  }

  async getEventosOrganizadosUsuarioById(id: number): Promise<any> {
    const res = await this.http.get(REST_SERVER_URL + "/usuarios/" + id + "/organizadosPorMi").toPromise()
    return res.json().map(Evento.fromJson)
  }

}

export function fechaHoy() {
  return new Date(2018, 5, 5, 12, 35)
}
