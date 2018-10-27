import { Component, OnInit } from '@angular/core';
import { Invitacion } from 'src/model/domain/evento/invitacion';
import { InvitacionesService } from 'src/app/services/invitaciones.service';
import { Usuario } from 'src/model/domain/usuario/usuario';

@Component({
  selector: 'app-InvitacionesPendientes',
  templateUrl: './InvitacionesPendientes.component.html',
  styleUrls: ['./InvitacionesPendientes.component.css']
})
export class InvitacionesPendientesComponent implements OnInit {

  invitacionesPendientes: Array<Invitacion> = [];
  errorMessage: string;

  constructor(private invitacionesService: InvitacionesService) { }

  ngOnInit() {
    // this.invitacionesPendientes = this.invitacionesService.invitacionesPendientes.filter(invitacion => invitacion.estaPendiente)
  }

  confirmarInvitacion(invitacion: Invitacion) {
    try {
      console.log(invitacion);
      this.errorMessage = ""
      invitacion.confirmar(invitacion.cantidadAcompaniantesMaxima)
    } catch (errorValidation) {
      this.errorMessage = errorValidation
    }
  }
  rechazarInvitacion(invitacion: Invitacion){
    console.log(invitacion);
    invitacion.rechazar()
    // this.invitacionesPendientes = this.invitacionesService.invitacionesPendientes //?
  }
  estaPendiente(invitacion: Invitacion) {
    invitacion.estaPendiente
  }
}
