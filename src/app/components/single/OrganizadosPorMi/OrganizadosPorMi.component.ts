import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USRTESTID } from 'src/app/configuration';
import { EventosService } from 'src/app/services/eventos.service';
import { Evento } from 'src/model/domain/evento/evento';

@Component({
  selector: 'app-OrganizadosPorMi',
  templateUrl: './OrganizadosPorMi.component.html',
  styleUrls: ['./OrganizadosPorMi.component.css'],
  providers: [EventosService]
})
export class OrganizadosPorMiComponent implements OnInit {

  organizadosPorMi: Array<Evento>
  errors = [];

  constructor(private eventosService: EventosService, private router: Router) { }

  ngOnInit() {
    this.eventosService.getEventosOrganizadosUsuarioById(USRTESTID).subscribe(
      data => this.organizadosPorMi = data,
      error => {
        console.log("error", error)
        this.errors.push(error._body)
      }
    )
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
  }
  nuevoEventoAbierto(){
    console.log("hois")
    this.router.navigate(['misEventos/nuevoEventoAbierto'])
  }
}


