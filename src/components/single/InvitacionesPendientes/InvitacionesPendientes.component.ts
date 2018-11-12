import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { USRTESTID } from 'src/app/configuration';
import { InvitacionesService } from 'src/services/invitaciones.service';
import { fechaHoy, EventosService } from 'src/services/eventos.service';
import { mostrarError } from '../perfil/perfil.component';
import { UsuariosService } from 'src/services/usuarios.service';
import { Usuario } from 'src/model/domain/usuario/usuario';
import { EventoCerrado } from 'src/model/domain/evento/eventoCerrado';
import { Invitacion } from 'src/model/domain/evento/invitacion';

@Component({
  selector: 'app-InvitacionesPendientes',
  templateUrl: './InvitacionesPendientes.component.html',
  styleUrls: ['./InvitacionesPendientes.component.css'],
  providers: [InvitacionesService, UsuariosService, EventosService]
})
export class InvitacionesPendientesComponent implements OnInit {

  invitacionesPendientes: Array<Invitacion> = [];
  errorMessage: string;
  errors = [];
  eventoInvitacion: EventoCerrado
  usuario: Usuario
  eventosInvitaciones: Array<EventoCerrado>;

  constructor(public snackBar: MatSnackBar, private invitacionesService: InvitacionesService, private router: Router,
    private usuariosService: UsuariosService, private eventosService: EventosService) { }

  async ngOnInit() {

    this.invitacionesPendientes = await this.invitacionesService.getInvitacionesUsuarioById(USRTESTID)
    this.usuario = await this.usuariosService.getUsuarioById(USRTESTID)
    this.router.routeReuseStrategy.shouldReuseRoute = () => false

  }
  openSnackBar() {
    const ok = "OK"
    this.snackBar.open(this.errorMessage, ok, {
      duration: 2000,
    });
  }

  public confirmarInvitacion(invitacion: Invitacion) {
    try {
      this.invitacionesService.actualizarInvitacionesConfirmadas(invitacion)
      this.borrarInvitacion(invitacion)
    } catch (e) {
      this.errorMessage = e
    }
  }
  rechazarInvitacion(invitacion: Invitacion) {
    this.borrarInvitacion(invitacion)
  }

  borrarInvitacion(invitacion: Invitacion) {
    this.invitacionesPendientes.splice(this.invitacionesPendientes.indexOf(invitacion), 1)
    this.invitacionesService.actualizarInvitacioneRechazadas(invitacion)
  }

  cantidadNoEsValida(invitacion: Invitacion) {
    return (invitacion.cantidadAcompaniantes == null || invitacion.cantidadAcompaniantes < 0 || invitacion.cantidadAcompaniantes >= invitacion.cantidadAcompaniantesMaxima)
  }

  cargaNotificacion(invitacion: Invitacion) {
    if (this.cantidadNoEsValida(invitacion)) {
      this.errorMessage = "Error: cantidad de invitados no valida"
      this.openSnackBar()
    }
  }

}