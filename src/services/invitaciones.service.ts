import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { REST_SERVER_URL } from 'src/app/configuration';
import { Invitacion } from 'src/model/domain/evento/invitacion';

@Injectable({
  providedIn: 'root'
})

export class InvitacionesService {

  constructor(private http: Http) { }

  async getInvitacionesUsuarioById(id: number): Promise<any> {
    const res = await this.http.get(REST_SERVER_URL + "/usuarios/" + id + "/invitaciones").toPromise()
    return res.json().map(Invitacion.fromJson)
  }

  async eliminarInvitacion(invitacion: Invitacion) {
    console.log(invitacion.toJSON())
    return this.http.post(REST_SERVER_URL + "/usuarios/" + invitacion.idInvitado + "/invitacion", invitacion.toJSON()).toPromise()
  }

}
