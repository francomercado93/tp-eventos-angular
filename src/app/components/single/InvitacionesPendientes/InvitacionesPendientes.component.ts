import { Component, OnInit } from '@angular/core';
import { Invitacion } from 'src/model/domain/evento/invitacion';
import { InvitacionesService } from 'src/app/services/invitaciones.service';
import { Router } from '@angular/router';
import { USRTESTID } from 'src/app/configuration';

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

  constructor(private invitacionesService: InvitacionesService, private router: Router, ) { }

  ngOnInit() {
    this.invitacionesService.getInvitacionesUsuarioById(USRTESTID).subscribe(
      data => this.invitacionesPendientes = data,
      error => {
        console.log("error", error)
        this.errors.push(error._body)
      }
    )
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
  }


  public confirmarInvitacion(invitacion: Invitacion) {
    try {
      this.errorMessage = ""
      // invitacion.evento.confirmarUsuario(invitacion.invitado)
    } catch (errorValidation) {
      this.errorMessage = errorValidation
    }
  }
  public rechazarInvitacion(invitacion: Invitacion) {
    console.log(invitacion);
    invitacion.evento.usuarioRechazaInvitacion(invitacion.invitado)
    // this.invitacionesPendientes = this.invitacionesService.invitacionesPendientes //?
  }
  // estaPendiente(invitacion: Invitacion) {
  //   invitacion.estaPendiente
  // }
}
