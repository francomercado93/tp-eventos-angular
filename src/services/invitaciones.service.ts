import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Invitacion } from 'src/model/domain/evento/invitacion';
import { REST_SERVER_URL } from 'src/app/configuration';

@Injectable({
  providedIn: 'root'
})

export class InvitacionesService {

  constructor(private http: Http) { }

  async getInvitacionesUsuarioById(id: number): Promise<any> {
    const res = await this.http.get(REST_SERVER_URL + "/usuarios/" + id + "/invitaciones").toPromise()
    return res.json().map(Invitacion.fromJson)
  }

  async actualizarInvitacion(invitacion: Invitacion) {
    console.log(invitacion.invitado)
    console.log(invitacion.evento)
    console.log(invitacion.estaConfirmado)
    console.log(invitacion.estaRechazado)
    return this.http.put(REST_SERVER_URL + "/usuarios/" + invitacion.invitado.id + "/invitacion", invitacion.toJSON()).toPromise()
  }

}
