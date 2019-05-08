import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedicosComponent} from './paginas/medicos/medicos.component';
import {CitasComponent} from './paginas/citas/citas.component';
import {AgregarComponent} from 'src/app/paginas/citas/agregar/agregar.component';

const routes: Routes = [
	{ path: '', component:MedicosComponent},
	{path: 'citas', component:CitasComponent},
	{path: 'agregar', component: AgregarComponent},
	{path: 'editar/:id', component: AgregarComponent},
	{path: '**', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
