import { Injectable } from '@angular/core';
import { Invitacion } from 'src/model/domain/evento/invitacion';
import { Usuario } from 'src/model/domain/usuario/usuario';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class InvitacionesService {

  invitacionesPendientes: Invitacion[]

  constructor(public usuarioServiceTest: UsuariosService) {
    this.invitacionesPendientes = this.usuarioServiceTest.usuarioTest.invitaciones.filter(invitacion => invitacion.estaPendiente == true )}

}
