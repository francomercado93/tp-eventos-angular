import { Profesional } from '../model/domain/usuario/usuario';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { REST_SERVER_URL } from 'src/app/configuration';
import { Usuario } from 'src/model/domain/usuario/usuario';
import { of } from 'rxjs';

export interface IUsuarioService {
  getAmigosUsuarioById(id: number): Promise<any>
  getUsuarioById(id: number): Promise<Usuario>
  actualizarUsuario(usuario: Usuario, amigo: Usuario): void
}

@Injectable({
  providedIn: 'root'
})

export class UsuariosService implements IUsuarioService {

  constructor(private http: Http) { }

  async getUsuarioById(id: number) {
    const res = await this.http.get(REST_SERVER_URL + "/usuarios/" + id).toPromise()
    return Usuario.fromJson(res.json())
  }

  async getAmigosUsuarioById(id: number) {
    const res = await this.http.get(REST_SERVER_URL + "/usuarios/" + id + "/amigos").toPromise()
    return res.json().map(Usuario.fromJson)
  }

  async actualizarUsuario(usuario: Usuario, amigo: Usuario) {
    return this.http.put(REST_SERVER_URL + "/usuarios/" + usuario.id + "/amigos/" + amigo.id, usuario.toJSON()).toPromise()
  }

}
export default class StubUsuariosService implements IUsuarioService {
  usrppal = new Usuario(0, 'Joaquin', 'Perreyra', 'Joak', 'joaco88@gmail.com', new Profesional())
  amigos = [(new Usuario(1, 'Juan', 'Quiroga', 'juan01', 'juan01@gmail.com', new Profesional())),
  (new Usuario(2, 'Martin', 'Benitez', 'tinchoB', 'tincho92@gmail.com', new Profesional())),
  (new Usuario(2, 'Martin', 'Benitez', 'tinchoB', 'tincho92@gmail.com', new Profesional()))]

  async getUsuarioById(id: number) {
    return this.usrppal
  }

  async getAmigosUsuarioById(id: number) {
    return this.amigos
  }

  async actualizarUsuario(usuario: Usuario, amigo: Usuario) {
  }
}
// @Injectable({
//   providedIn: 'root'
// })
// export class StubUsuariosService {

//   usuarioTest: Usuario;

//   constructor() {
//     this.usuarioTest = new Usuario('Joaquin', 'Perreyra', 'Joak', 'joaco88@gmail.com', new Profesional());
//     let organizador1 = new Usuario('Juan', 'Quiroga', 'juan01', 'juan01@gmail.com', new Profesional());
//     let organizador2 = new Usuario('Martin', 'Benitez', 'tinchoB', 'tincho92@gmail.com', new Profesional());

//     let cumplePepe = new EventoCerrado('Cumple pepe', new Date(2018, 6, 2, 16, 30), 'Casa de Manolo', organizador1, new Date(2018, 6, 1, 16, 30));
//     let casamiento = new EventoCerrado('Casamiento', new Date(2018, 6, 7, 18, 15), 'Salon', organizador2, new Date(2018, 5, 7, 18, 15));
//     let casamientoLaura = new EventoCerrado('Casamiento Laura', new Date(2018, 6, 11, 18, 15), 'Salon', organizador2, new Date(2018, 5, 11, 18, 15));
//     let recitalPepo = new EventoAbierto('Recital Pepo', new Date(2018, 6, 5, 19, 15), 'Bar 3', organizador1);
//     let muestraCanto = new EventoAbierto('Muestra canto', new Date(2018, 11, 26, 15, 0), 'Teatro', organizador2);
//     let muestraCanto2 = new EventoAbierto('Muestra canto2', new Date(2019, 1, 3, 19, 0), 'Teatro', organizador1);


//     let quinceMaria = new EventoCerrado('Quince Maria', new Date(2018, 11, 11, 22, 11), 'Salon Elegante', organizador2, new Date(2018, 10, 14, 22, 0))
//     this.usuarioTest.amigos = AMIGOS;
//     let invitacionPepe = new Invitacion(this.usuarioTest, cumplePepe, 5)
//     invitacionPepe.agregarListaAsistentesEventoCerrado;
//     this.usuarioTest.recibirInvitacion(invitacionPepe);
//     this.usuarioTest.recibirInvitacion(new Invitacion(this.usuarioTest, casamiento, 2));
//     this.usuarioTest.recibirInvitacion(new Invitacion(this.usuarioTest, casamientoLaura, 1));
//     this.usuarioTest.recibirInvitacion(new Invitacion(this.usuarioTest, quinceMaria, 3));
//     let invTest = new Invitacion(this.usuarioTest, quinceMaria, 10)
//     this.usuarioTest.invitaciones.push(invTest)
//   }
// }
