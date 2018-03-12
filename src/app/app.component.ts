import { Component } from '@angular/core';
import { ConsultaBackService } from './consulta-back.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = '';
  constructor(private consultaBackService: ConsultaBackService) {
    const obs = consultaBackService.consultarTittle();
    obs.subscribe(
      res => {
        this.title = res;
        console.log('Consulta exitosa http.post');
      },
      err => { console.log('Consulta fallida http.post'); });
  }
}
