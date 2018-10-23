import { Injectable } from '@angular/core';
import { Usuario } from 'src/model/domain/usuario/usuario';
import { EventoCerrado } from 'src/model/domain/evento/eventoCerrado';
import { EventoAbierto } from 'src/model/domain/evento/EventoAbierto';
import { AMIGOS } from 'src/model/domain/juegoDatos/amigos';
import { Invitacion } from 'src/model/domain/evento/invitacion';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarioTest: Usuario;

  constructor() {
    this.usuarioTest = new Usuario('Joquin', 'Perreyra', 'Joac', 'joaco88@gmail.com');
    let organizador1 = new Usuario('Juan', 'Quiroga', 'juan01', 'juan01@gmail.com');
    let organizador2 = new Usuario('Martin', 'Benitez', 'tinchoB', 'tincho92@gmail.com');

    let cumplePepe = new EventoCerrado('Cumple pepe', new Date(2018, 6, 2, 16, 30), 'Casa de Manolo', organizador1, new Date(2018, 6, 1, 16, 30));
    let casamiento = new EventoCerrado('Casamiento', new Date(2018, 6, 7, 18, 15), 'Salon', organizador2, new Date(2018, 5, 7, 18, 15));
    let casamientoLaura = new EventoCerrado('Casamiento Laura', new Date(2018, 6, 11, 18, 15), 'Salon', organizador2, new Date(2018, 5, 11, 18, 15));
    let recitalPepo = new EventoAbierto('Recital Pepo', new Date(2018, 6, 5, 19, 15), 'Bar 3', organizador1);
    let muestraCanto = new EventoAbierto('Muestra canto', new Date(2018, 11, 26, 15, 0), 'Teatro', organizador2);
    let muestraCanto2 = new EventoAbierto('Muestra canto2', new Date(2019, 1, 3, 19, 0), 'Teatro', organizador1);

    let quinceMaria = new EventoCerrado('Quince Maria', new Date(2018, 11, 14, 22, 0), 'Salon Elegante', organizador2, new Date(2018, 10, 14, 22, 0))
    this.usuarioTest = new Usuario('Joquin', 'Perreyra', 'Joac', 'joaco88@gmail.com');
    this.usuarioTest.amigos = AMIGOS;
    this.usuarioTest.recibirInvitacion(new Invitacion(this.usuarioTest, cumplePepe, 5));
    this.usuarioTest.recibirInvitacion(new Invitacion(this.usuarioTest, casamiento, 2));
    this.usuarioTest.recibirInvitacion(new Invitacion(this.usuarioTest, casamientoLaura, 1));
    this.usuarioTest.recibirInvitacion(new Invitacion(this.usuarioTest, quinceMaria, 3));
  }
}
