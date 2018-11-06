import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USRTESTID } from 'src/app/configuration';
import { Evento } from 'src/model/domain/evento/evento';
import { Usuario } from 'src/model/domain/usuario/usuario';
import { EventosService, fechaHoy } from 'src/services/eventos.service';
import { LocacionesService } from 'src/services/locaciones.service';
import { UsuariosService } from 'src/services/usuarios.service';
import { mostrarError } from '../perfil/perfil.component';

@Component({
  selector: 'app-nuevoEventoAbierto',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.css']
})
export class NuevoEventoComponent implements OnInit {

  evento: Evento = new Evento()
  inicioModel: any = {}
  finEventoModel: any = {}
  fechaMaximaConfirmacion: any = {}
  locacionesPosibles = []
  errors = []
  usuario: Usuario
  opcionesFecha: {}

  constructor(private locacionesService: LocacionesService, private usuariosService: UsuariosService, private eventosService: EventosService, private router: Router) { }

  async ngOnInit() {
    try {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.usuario = await this.usuariosService.getUsuarioById(USRTESTID)
    } catch (error) {
      mostrarError(this, error)
    }
    try {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.usuario.eventosOrganizados = await this.eventosService.getEventosOrganizadosUsuarioById(USRTESTID)
    } catch (error) {
      mostrarError(this, error)
    }
    try {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.locacionesPosibles = await this.locacionesService.getLocaciones()
    } catch (error) {
      mostrarError(this, error)
    }
    this.initialize()
    this.evento.initialize()
    this.evento.fechaCreacion = fechaHoy()
    this.evento.organizadorEvento = this.usuario.nombreUsuario
  }

  private initialize() {
    const ayer = fechaHoy() //
    ayer.setDate(ayer.getDate() - 1)
    this.inicioModel = {
      date: this.convertirANuevoDate(fechaHoy())
    }
    this.finEventoModel = {
      date: this.convertirANuevoDate(fechaHoy())
    }
    this.fechaMaximaConfirmacion = {
      date: this.convertirANuevoDate(fechaHoy())
    };
    this.opcionesFecha = {
      dateFormat: 'dd/mm/yyyy', disableUntil: this.convertirANuevoDate(ayer)
    }
  }

  convertirANuevoDate(fecha: Date) {
    return {
      year: fecha.getFullYear(),
      month: fecha.getMonth() + 1,
      day: fecha.getDate(),
    }
  }
  convertirADate(fecha: any): Date {
    if (!fecha) return null
    return new Date(fecha.date.year, fecha.date.month - 1, fecha.date.day, 12, 35)
  }
  cancelar() {
    this.router.navigate(['misEventos/organizadosPorMi'])
  }

  aceptar() {
    try {
      this.errors = []
      this.setearNuevasFechas();
      this.validar();
      this.usuario.puedoCrearEvento(this.evento)
      this.eventosService.actualizarEventosOrganizadosUsuario(USRTESTID, this.evento)
      this.router.navigate(['misEventos/organizadosPorMi'])
    } catch (e) {
      this.errors.push(e)
    }
  }

  private validar() {
    this.evento.validarFechas()
  }

  private setearNuevasFechas() {
    this.evento.inicioEvento = this.convertirADate(this.inicioModel);
    this.evento.fechaMaximaConfirmacion = this.convertirADate(this.fechaMaximaConfirmacion);
    this.evento.finEvento = this.convertirADate(this.finEventoModel);
  }
}
