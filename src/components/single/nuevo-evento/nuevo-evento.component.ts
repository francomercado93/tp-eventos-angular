import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { USRTESTID } from 'src/app/configuration';
import { Evento } from 'src/model/domain/evento/evento';
import { Usuario } from 'src/model/domain/usuario/usuario';
import { EventosService, fechaHoy } from 'src/services/eventos.service';
import { LocacionesService } from 'src/services/locaciones.service';
import { UsuariosService } from 'src/services/usuarios.service';
import { mostrarError } from '../perfil/perfil.component';

@Component({
  selector: 'app-nuevoEvento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.css'],
  providers: [LocacionesService, UsuariosService, EventosService]
})
export class NuevoEventoComponent implements OnInit {

  evento: Evento //= new Evento()
  inicioModel: any = {}
  finEventoModel: any = {}
  fechaMaximaConfirmacion: any = {}
  locacionesPosibles = []
  errors = []
  usuario: Usuario
  opcionesFecha: {}
  tipoEvento: String;


  constructor(private locacionesService: LocacionesService, private usuariosService: UsuariosService, private eventosService: EventosService, private router: Router,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.tipoEvento = params['tipo'] //guardo el tipo
      this.evento = this.eventosService.getTipoEvento(params['tipo'])
    })
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

      this.eventosService.nuevoEvento(USRTESTID, this.evento, this.tipoEvento)
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
