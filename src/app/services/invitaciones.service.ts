import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { REST_SERVER_URL } from '../configuration';
import { Observable } from 'rxjs';
import { Invitacion } from 'src/model/domain/evento/invitacion';

@Injectable({
  providedIn: 'root'
})
export class InvitacionesService {

  constructor(private http: Http) { }

  getInvitacionesUsuarioById(id: number): Observable<any> {
    return this.http.get(REST_SERVER_URL + "/usuarios/" + id + "/invitaciones").pipe(map(this.convertToInvitaciones))
  }

  convertToInvitaciones(res: Response) {
    return res.json().map(invJson => Invitacion.fromJson(invJson))
  }

}
