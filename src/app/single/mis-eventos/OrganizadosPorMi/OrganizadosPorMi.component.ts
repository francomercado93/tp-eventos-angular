import { Evento } from '../../../../model/domain/evento/evento';
import { OrganizadosPorMiService } from '../../../services/organizadosPorMi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OrganizadosPorMi',
  templateUrl: './OrganizadosPorMi.component.html',
  styleUrls: ['./OrganizadosPorMi.component.css']
})
export class OrganizadosPorMiComponent implements OnInit {
  
  organizadosPorMi: Array<Evento>
  
  constructor(private organizadosService: OrganizadosPorMiService) { }

  ngOnInit() {
    this.organizadosPorMi = this.organizadosService.eventosOrganizados
  }

}
