import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USRTESTID } from 'src/app/configuration';
import { Evento } from 'src/model/domain/evento/evento';
import { EventosService, fechaHoy } from 'src/services/eventos.service';
import { mostrarError } from '../perfil/perfil.component';

@Component({
  selector: 'app-OrganizadosPorMi',
  templateUrl: './OrganizadosPorMi.component.html',
  styleUrls: ['./OrganizadosPorMi.component.css'],
  providers: [EventosService]
})
export class OrganizadosPorMiComponent implements OnInit {

  organizadosPorMi: Array<Evento>
  errors = [];
  fechaHoy: Date

  constructor(private eventosService: EventosService, private router: Router) { }

  async ngOnInit() {

    try {
      this.fechaHoy = fechaHoy()
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.organizadosPorMi = await this.eventosService.getEventosOrganizadosUsuarioById(USRTESTID)
    } catch (error) {
      mostrarError(this, error)
    }
  }

  nuevoEvento() {
    this.router.navigate(['misEventos/nuevoEvento'])
  }

 
}


