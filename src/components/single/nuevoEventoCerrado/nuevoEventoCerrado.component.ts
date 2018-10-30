import { Component, OnInit } from '@angular/core';
import { EventoAbierto } from 'src/model/domain/evento/EventoAbierto';
import { Router } from '@angular/router';
import { EventoCerrado } from 'src/model/domain/evento/eventoCerrado';
import { LocacionesService } from 'src/services/locaciones.service';
import { EventosService } from 'src/services/eventos.service';

@Component({
  selector: 'app-nuevoEventoCerrado',
  templateUrl: './nuevoEventoCerrado.component.html',
  styleUrls: ['./nuevoEventoCerrado.component.css']
})

export class NuevoEventoCerradoComponent implements OnInit {

  evento = new EventoCerrado()
  inicioModel: any = {}
  finEventoModel: any = {}
  fechaMaximaConfirmacion: any = {}
  opcionesFecha: {}
  locacionesPosibles = []
  errors = [];

  constructor(private locacionesService: LocacionesService, private eventosService: EventosService, private router: Router) { }

  ngOnInit() {
    const ayer = new Date()
    ayer.setDate(ayer.getDate() - 1)
    this.opcionesFecha = {
      dateFormat: 'dd/mm/yyyy', disableUntil: this.convertirANuevoDate(ayer)
    }

    const iniEvento = this.evento.inicioEvento
    this.inicioModel = {
      date: this.convertirANuevoDate(iniEvento)
    }

    const finEvento = this.evento.finEvento
    this.finEventoModel = {
      date: this.convertirANuevoDate(finEvento)
    }
    const fechaMaximaConfirmacionEvento = this.evento.fechaMaximaConfirmacion
    this.fechaMaximaConfirmacion = {
      date: this.convertirANuevoDate(fechaMaximaConfirmacionEvento)
    }

    this.locacionesService.getLocaciones().subscribe(
      data => this.locacionesPosibles = data,
      error => {
        console.log("error", error)
        this.errors.push(error._body)
      }
    )
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
  }
  convertirANuevoDate(fecha: Date) {
    return {
      year: fecha.getFullYear(),
      month: fecha.getMonth() + 1,
      day: fecha.getDate()
    }
  }

  convertirADate(fecha: any): Date {
    if (!fecha) return null
    return new Date(fecha.year, fecha.month - 1, fecha.day)
  }

  cancelar() {
    this.router.navigate(['misEventos/organizadosPorMi'])
  }
  aceptar() {
    this.router.navigate(['misEventos/organizadosPorMi'])
  }
}
