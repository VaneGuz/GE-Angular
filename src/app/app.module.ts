import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConsultaBackService } from './consulta-back.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ConsultaBackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
