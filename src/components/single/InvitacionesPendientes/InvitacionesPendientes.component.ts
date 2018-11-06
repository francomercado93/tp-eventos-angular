import { Component, OnInit } from '@angular/core';
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
  cantidadAcompaniantes: number
  eventoInvitacion: EventoCerrado
  usuario: Usuario
  eventosInvitaciones: Array<EventoCerrado>;

  constructor(private invitacionesService: InvitacionesService, private router: Router,
    private usuariosService: UsuariosService, private eventosService: EventosService) { }

  async ngOnInit() {

    this.invitacionesPendientes = await this.invitacionesService.getInvitacionesUsuarioById(USRTESTID)
    this.usuario = await this.usuariosService.getUsuarioById(USRTESTID)
    this.router.routeReuseStrategy.shouldReuseRoute = () => false

  }

  public confirmarInvitacion(invitacion: Invitacion) {
    try {
      this.invitacionesService.actualizarInvitacionesConfirmadas(invitacion)
      invitacion.evento.confirmarUsuario(this.usuario)
      this.borrarInvitacion(invitacion)
    } catch (error) {
      mostrarError(this, error)
    }
  }
  rechazarInvitacion(invitacion: Invitacion) {
    this.borrarInvitacion(invitacion)
  }

  borrarInvitacion(invitacion: Invitacion) {
    this.invitacionesPendientes.splice(this.invitacionesPendientes.indexOf(invitacion), 1)
    this.invitacionesService.actualizarInvitacioneRechazadas(invitacion)
  }
}
