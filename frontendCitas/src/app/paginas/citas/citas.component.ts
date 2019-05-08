import { Component, OnInit } from '@angular/core';
import {CitasApiService} from 'src/app/servicios/citas-api.service';
import { citas } from 'src/app/modelo/citas'
@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  arregloCitas: any  = [

  ];
  constructor(private servicioCitas: CitasApiService) { }

  ngOnInit() {
  	this.listarCitas();
  }
  //metodo para listar citas
  listarCitas(){
  	this.servicioCitas.getCitas()
  	.subscribe(
  		res => {
  			this.arregloCitas = res;
  		},
  		err =>console.error(err)
  	);
  }
  //funcion para listar una sola cita
 eliminarCita(id: string){
   this.servicioCitas.eliminarCitas(id)
   .subscribe(
     res => {
       console.log(res);
       this.listarCitas();
     },
     err => console.error(err)
    )
 }

 
}
