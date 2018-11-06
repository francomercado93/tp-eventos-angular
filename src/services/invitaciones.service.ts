import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { REST_SERVER_URL } from "src/app/configuration";
import { Invitacion } from "src/model/domain/evento/invitacion";
import { Usuario } from 'src/model/domain/usuario/usuario';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})

export class InvitacionesService {

  usuario: Usuario
  usrService: UsuariosService
  constructor(private http: Http) { }

  async getInvitacionesUsuarioById(id: number): Promise<any> {
    const res = await this.http.get(REST_SERVER_URL + "/usuarios/" + id + "/invitaciones").toPromise()
    return res.json().map(Invitacion.fromJson)
  }

  actualizarUsuarioPrincipal(usuario: Usuario, ) {
    this.http.put(REST_SERVER_URL + "/usuarios/" + 0, usuario.toJSON()).subscribe()
  }

  actualizarInvitacioneRechazadas(invitacion: Invitacion) {
    this.http.put(REST_SERVER_URL + "/invitacion/" + 0, invitacion.evento.nombreEvento).subscribe()
  }

  actualizarInvitacionesConfirmadas(invitacion: Invitacion) {
    this.http.put(REST_SERVER_URL + "/usuarios/" + 0 + "/confirmarEvento", invitacion.evento.nombreEvento).subscribe()
  }


  actualizarInvitacion() {
    this.actualizarUsuarioPrincipal(this.usuario)
  }

}
  // async getInvitacionesUsuarioById(id: number): Promise<any> {
  //   const res = await this.http.get(REST_SERVER_URL + "/usuarios/" + id + "/invitaciones").toPromise()
  //   return res.json().map(Invitacion.fromJson)
  // }

  // async eliminarInvitacion(invitacion: Invitacion) {
  //   console.log(invitacion.toJSON())
  //   return this.http.post(REST_SERVER_URL + "/usuarios/" + invitacion.idInvitado + "/invitacion", invitacion.toJSON()).toPromise()
  // }


