import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cadena } from './cadena';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConsultaBackService {
  consultarTittleUrl = 'http://maquinalocal.suranet.com/PlataformaRentas/dojos/saludador/saludar';
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  consultarTittle() {
    const res =  this.http.get(this.consultarTittleUrl, {responseType: 'text'});
    return res;
  }
}
