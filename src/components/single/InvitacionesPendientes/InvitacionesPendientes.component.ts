import { Component, OnInit } from '@angular/core';
import { Invitacion } from 'src/model/domain/evento/invitacion';
import { Router } from '@angular/router';
import { USRTESTID } from 'src/app/configuration';
import { InvitacionesService } from 'src/services/invitaciones.service';
import { fechaHoy } from 'src/services/eventos.service';
import { EventoCerrado } from 'src/model/domain/evento/eventoCerrado';
import { mostrarError } from '../perfil/perfil.component';

@Component({
  selector: 'app-InvitacionesPendientes',
  templateUrl: './InvitacionesPendientes.component.html',
  styleUrls: ['./InvitacionesPendientes.component.css'],
  providers: [InvitacionesService]
})
export class InvitacionesPendientesComponent implements OnInit {

  invitacionesPendientes: Array<Invitacion> = [];
  errorMessage: string;
  errors = [];
  cantidadAcompaniantes: number
  eventoInvitacion: EventoCerrado

  constructor(private invitacionesService: InvitacionesService, private router: Router, ) { }

  async ngOnInit() {

    try {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.invitacionesPendientes = await this.invitacionesService.getInvitacionesUsuarioById(USRTESTID)
    } catch (error) {
      mostrarError(this, error)
    }
  }

  public confirmarInvitacion(invitacion: Invitacion) {
    try {
      this.errorMessage = ""
      // console.log(invitacion)
      invitacion.confirmar(this.cantidadAcompaniantes)
    } catch (errorValidation) {
      this.errorMessage = errorValidation
    }
  }
  public rechazarInvitacion(invitacion: Invitacion) {
    console.log(invitacion)
    invitacion.rechazar()
    this.invitacionesService.actualizarInvitacion(invitacion)
  }
}
