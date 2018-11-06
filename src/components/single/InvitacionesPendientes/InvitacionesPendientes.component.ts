import { Component, OnInit } from '@angular/core';
import { Invitacion } from 'src/model/domain/evento/invitacion';
import { Router } from '@angular/router';
import { USRTESTID } from 'src/app/configuration';
import { InvitacionesService } from 'src/services/invitaciones.service';
import { fechaHoy } from 'src/services/eventos.service';
import { EventoCerrado } from 'src/model/domain/evento/eventoCerrado';
import { mostrarError } from '../perfil/perfil.component';
import { UsuariosService } from 'src/services/usuarios.service';
import { Usuario } from 'src/model/domain/usuario/usuario';

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

  constructor(private invitacionesService: InvitacionesService, private router: Router, private usuariosService: UsuariosService) { }

  async ngOnInit() {

    try {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.invitacionesPendientes = await this.invitacionesService.getInvitacionesUsuarioById(USRTESTID)
    } catch (error) {
      mostrarError(this, error)
    }
    try {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.usuario = await this.usuariosService.getUsuarioById(USRTESTID)
    } catch (error) {
      mostrarError(this, error)
    }
  }

  public confirmarInvitacion(invitacion: Invitacion) {
    try {
      this.errorMessage = ""
      invitacion.invitado = this.usuario
      invitacion.confirmar(this.cantidadAcompaniantes)
    } catch (errorValidation) {
      this.errorMessage = errorValidation
    }
  }
  public rechazarInvitacion(invitacion: Invitacion) {
    invitacion.invitado = this.usuario
    console.log(invitacion)
    invitacion.rechazar()
    this.invitacionesService.actualizarInvitacion(invitacion)
  }
}
