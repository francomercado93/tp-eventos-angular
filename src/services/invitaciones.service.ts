import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Invitacion } from 'src/model/domain/evento/invitacion';
import { REST_SERVER_URL } from 'src/app/configuration';

@Injectable({
  providedIn: 'root'
})
export class InvitacionesService {

  constructor(private http: Http) { }

  getInvitacionesUsuarioById(id: number): Observable<any> {
    return this.http.get(REST_SERVER_URL + "/usuarios/" + id + "/invitaciones").pipe(map(this.convertToInvitaciones))
  }

  actualizarInvitacion(invitacion: Invitacion) {
    console.log(invitacion.invitado)
    console.log(invitacion.evento)
    console.log(invitacion.estaConfirmado)
    console.log(invitacion.estaRechazado)
    return this.http.put(REST_SERVER_URL + "/usuarios/" + invitacion.invitado.id + "/invitacion", invitacion.toJSON()).subscribe()
  }

  convertToInvitaciones(res: Response) {
    return res.json().map(invJson => Invitacion.fromJson(invJson))
  }

}
