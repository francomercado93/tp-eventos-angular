import { Injectable } from '@angular/core';
import { Evento } from 'src/model/domain/evento/evento';

@Injectable({
  providedIn: 'root'
})
export class OrganizadosPorMiService {

  eventosOrganizados: Array<Evento>

  constructor() {
    // let userOrg = new Usuario('Juan', 'Quiroga', 'juan01', 'juan01@gmail.com', new Profesional());
    // const casamiento = new EventoCerrado('Casamiento', new Date(2018, 6, 7, 18, 15), 'Salon', userOrg, new Date(2018, 5, 7, 18, 15));
    // const casamient2 = new EventoCerrado('Casamiento Laura', new Date(2018, 6, 11, 18, 15), 'Salon', userOrg, new Date(2018, 5, 11, 18, 15));
    // this.eventosOrganizados = [casamiento, casamient2]
  }
}

