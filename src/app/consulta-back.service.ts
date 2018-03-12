import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ConsultaBackService {
  consultarTittleUrl = '';
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  consultarTittle(): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' });
    const res =  this.http.get<string>(this.consultarTittleUrl, { headers: headers });
    return res;
  }
}
