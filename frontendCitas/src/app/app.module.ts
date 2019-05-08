import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './recursos/header/header.component';
import { FooterComponent } from './recursos/footer/footer.component';
import { CitasComponent } from './paginas/citas/citas.component';
import { MedicosComponent } from './paginas/medicos/medicos.component';
import { FormsModule } from '@angular/forms';
//servicios
import {CitasApiService} from './servicios/citas-api.service';
import { AgregarComponent } from './paginas/citas/agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CitasComponent,
    MedicosComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CitasApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
