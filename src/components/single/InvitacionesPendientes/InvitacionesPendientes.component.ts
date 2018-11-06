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
  providers: [InvitacionesService]
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

    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    try {
      this.eventosInvitaciones = await this.eventosService.getEventosDeInvitaciones(USRTESTID)
    } catch (error) {
      mostrarError(this, error)
    }
    try {
      this.usuario = await this.usuariosService.getUsuarioById(USRTESTID)
    } catch (error) {
      mostrarError(this, error)
    }
    try {
      this.invitacionesPendientes = await this.invitacionesService.getInvitacionesUsuarioById(USRTESTID)
      this.invitacionesPendientes.forEach(invitacion => invitacion.evento =
        this.eventosInvitaciones.find(evento => evento.nombreEvento ==  invitacion.evento.nombreEvento))
      this.invitacionesPendientes.forEach(invitacion => invitacion.invitado = this.usuario)
    } catch (error) {
      mostrarError(this, error)
    }

  }

  public confirmarInvitacion(invitacion: Invitacion) {
    try {
      this.errorMessage = ""
      // invitacion.confirmar(this.cantidadAcompaniantes)
    } catch (errorValidation) {
      this.errorMessage = errorValidation
    }
    this.removerInvitacionLista(invitacion)
  }
  public rechazarInvitacion(invitacion: Invitacion) {
    this.removerInvitacionLista(invitacion);
    invitacion.rechazar()
    this.invitacionesService.eliminarInvitacion(invitacion)
    // this.eventosService.actualizarInvitacionRechazadaEvento(invitacion.evento)
  }

  private removerInvitacionLista(invitacion: Invitacion) {
    this.invitacionesPendientes.splice(this.invitacionesPendientes.indexOf(invitacion), 1);
  }
}
