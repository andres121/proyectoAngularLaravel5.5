import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs/internal/Observable';
import {citas } from 'src/app/modelo/citas';
@Injectable({
  providedIn: 'root'
})
export class CitasApiService {

   API_URL = 'http://citas';	
  constructor(private http: HttpClient) {}

  getCitas(){
  	return this.http.get(`${this.API_URL}/api/citasMedicas`);
  }
  getMedico(){
    return this.http.get(`${this.API_URL}/api/medicos`);
  }
  getCita(id: string){
  	return this.http.get(`${this.API_URL}/api/citaMedica/${id}`);
  }
  crearCita(citas: citas){
  	return this.http.post(`${this.API_URL}/api/crearCitas`, citas);
  }
  actualizarCitas(id: string|number, citasActualizadas: citas){
    return this.http.put(`${this.API_URL}/api/actualizar/${id}`,citasActualizadas);
  }
  eliminarCitas(id: string){
  	return this.http.delete(`${this.API_URL}/api/eliminar/${id}`);
  }
 }

