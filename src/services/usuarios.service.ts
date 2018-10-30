import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { Usuario } from 'src/model/domain/usuario/usuario';
import { Observable } from 'rxjs';
import { REST_SERVER_URL } from 'src/app/configuration';

export interface IUsuarioService {
  // getAmigosUsuarioById(id: number): Observable<any>
  getUsuarioById(id: number): Observable<Usuario>
  actualizarUsuario(usuario: Usuario, amigo: Usuario): void
}

@Injectable({
  providedIn: 'root'
})

export class UsuariosService implements IUsuarioService {
  constructor(private http: Http) { }

  getUsuarioById(id: number) {
    return this.http.get(REST_SERVER_URL + "/usuarios/" + id).pipe(map(res => this.usuarioAsJson(res.json())))
  }

  getAmigosUsuarioById(id: number) {
    return this.http.get(REST_SERVER_URL + "/usuarios/" + id + "/amigos").toPromise()//.pipe(map(this.convertToUsuarios))
  }
 
  convertToUsuarios(res: Response) {
    return res.json().map(usuarioJson => Usuario.fromJson(usuarioJson))
  }

  private usuarioAsJson(usuarioJson): Usuario {
    return Usuario.fromJson(usuarioJson)
  }

  actualizarUsuario(usuario: Usuario, amigo: Usuario) {
    this.http.put(REST_SERVER_URL + "/usuarios/" + usuario.id + "/amigos/" + amigo.id, usuario.toJSON()).subscribe()
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
