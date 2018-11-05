import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/model/domain/evento/evento';
import { EventosService, fechaHoy } from 'src/services/eventos.service';
import { mostrarError } from '../perfil/perfil.component';
import { Router } from '@angular/router';
import { USRTESTID } from 'src/app/configuration';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  providers: [EventosService]
})
export class AgendaComponent implements OnInit {

  agenda: Array<Evento> = []
  eventosHoy: Array<Evento> = []
  eventosEstaSemana: Array<Evento> = []
  eventosProximos: Array<Evento> = []
  errors = [];

  constructor(private eventosService: EventosService, private router: Router) { }

  async ngOnInit() {
    try {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.agenda = await this.eventosService.getAgendaUsuarioById(USRTESTID)
      this.eventosHoy = this.obtenerEventosHoy()
      this.eventosEstaSemana = this.obtenerEventosEstaSemana()
      this.eventosProximos = this.obtenerEventosProximos()
    } catch (error) {
      mostrarError(this, error)
    }
  }

  obtenerEventosEstaSemana(): Evento[] {
    return this.agenda.filter(evento => this.filtroSemana(evento))
  }

  filtroSemana(evento: Evento): any {
    const inicio = evento.inicioEvento
    const diferencia = inicio.getDay() - fechaHoy().getDay()
    return (inicio.getDay() == fechaHoy().getDay() && inicio.getDate() == fechaHoy().getDate()) ||
      (inicio.getDate() - fechaHoy().getDate() == diferencia) && (inicio.getMonth() == fechaHoy().getMonth())
      && (inicio.getFullYear() == fechaHoy().getFullYear())
  }
  obtenerEventosHoy(): Evento[] {
    return this.agenda.filter(evento => this.filtroEventosHoy(evento))
  }

  filtroEventosHoy(evento: Evento): any {
    const inicio = evento.inicioEvento
    return (inicio.getDate() == fechaHoy().getDate()) && (inicio.getMonth() == fechaHoy().getMonth())
      && (inicio.getFullYear() == fechaHoy().getFullYear())
  }

  obtenerEventosProximos(): Evento[] {
    return this.agenda.filter(evento => !this.filtroEventosHoy(evento) && !this.filtroSemana(evento))
  }
  //bla
}

