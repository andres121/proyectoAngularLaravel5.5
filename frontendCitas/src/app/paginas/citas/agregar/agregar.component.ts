import { Component, OnInit } from '@angular/core';
import { CitasApiService } from 'src/app/servicios/citas-api.service';
import { citas } from 'src/app/modelo/citas'
import {ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
   medicos: any  = [

  ];
 
  arrayCitas: citas = {
  	id: 0,
  	enfermedad: '',
  	hora: '',
  	medico_id: 0
  }
  editar: boolean = false;
  constructor(private citasS: CitasApiService, private ruta: Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.listarMedico();
    const parametro = this.rutaActiva.snapshot.params;
     if (parametro.id) { 
       this.citasS.getCita(parametro.id)
       .subscribe(
           res => {
             console.log(res);
             this.arrayCitas = res;
             this.editar = true;
           },
           err => console.error(err)
        );
    }
  }
  listarMedico(){
    this.citasS.getMedico()
    .subscribe(
      res => {
        this.medicos = res;
      },
      err =>console.error(err)
    );
  }
   //metodo para listar citas
 
  guardarCita(){
  	this.citasS.crearCita(this.arrayCitas)
  	.subscribe(
  		res => {
  			console.log(res);
        this.ruta.navigate([
          '/citas'
        ])
  		},
  		err => console.error(err)
  	)
  }
  actualizaCita(){
      this.citasS.actualizarCitas(this.arrayCitas.id, this.arrayCitas)
      .subscribe(
          res => {
            console.log(res);
             this.ruta.navigate([
          '/citas'
        ])
          },
          err => console.error(err)
       )
  }
}
