import { Injectable, } from '@angular/core';
import { Http, Response } from '@angular/http';
import { REST_SERVER_URL } from '../configuration';
import { map } from 'rxjs/operators';
import { Locacion } from 'src/model/domain/evento/Locacion';

@Injectable({
  providedIn: 'root'
})
export class LocacionesService {

  constructor(private http: Http) { }
  getLocaciones() {
    return this.http.get(REST_SERVER_URL + "/locaciones").pipe(map(this.convertToLocaciones))
  }
  convertToLocaciones(res: Response) {
    return res.json().map(locacionJson => Locacion.fromJson(locacionJson))
  }
}
