import { Injectable } from '@angular/core';
import { Invitacion } from 'src/model/domain/evento/invitacion';
import { Usuario } from 'src/model/domain/usuario/usuario';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class InvitacionesService {

  // invitacionesPendientes: Invitacion[]

  constructor(private usuarioServiceTest: UsuariosService) {
  }

  get invitacionesPendientes() {
    return this.usuarioServiceTest.usuarioTest.invitaciones
  } 
}
