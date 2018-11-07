import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { REST_SERVER_URL } from 'src/app/configuration';
import { Locacion } from 'src/model/domain/evento/Locacion';

@Injectable({
  providedIn: 'root'
})
export class LocacionesService {

  constructor(private http: Http) { }

  async getLocaciones(): Promise<any> {
    const res = await this.http.get(REST_SERVER_URL + "/locaciones").toPromise()
    return res.json().map(Locacion.fromJson)
  }
}
