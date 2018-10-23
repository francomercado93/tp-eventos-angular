import { Component, OnInit } from '@angular/core';
import { Invitacion } from 'src/model/domain/evento/invitacion';
import { InvitacionesService } from 'src/app/services/invitaciones.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/model/domain/usuario/usuario';

@Component({
  selector: 'app-InvitacionesPendientes',
  templateUrl: './InvitacionesPendientes.component.html',
  styleUrls: ['./InvitacionesPendientes.component.css']
})
export class InvitacionesPendientesComponent implements OnInit {

  invitacionesPendientes: Array<Invitacion> = [];
  errorMessage: string;

  constructor(public invitacionesService: InvitacionesService) { }

  ngOnInit() {
    this.invitacionesPendientes = this.invitacionesService.invitacionesPendientes
  }

  confirmarInvitacion(invitacion: Invitacion) {
    try {
      this.errorMessage = ""
      invitacion.confirmar(invitacion.cantidadAcompaniantesMaxima)
    } catch (errorValidation) {
      this.errorMessage = errorValidation
    }
  }
  rechazarInvitacion(invitacion: Invitacion){
    invitacion.rechazar()
  }
  estaPendiente(invitacion: Invitacion) {
    invitacion.estaPendiente
  }
}
