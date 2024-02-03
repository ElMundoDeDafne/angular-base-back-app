import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './components/empleados/lista-empleados/lista-empleados.component';
import {RegistrarEmpleadoComponent  } from './components/registrar-empleado/registrar-empleado.component';
import { NotFound404Component } from './components/errors/not-found-404/not-found-404.component';

const routes: Routes = [
  {path: 'empleados',component:ListaEmpleadosComponent}, //añade rutas
  {path:'',redirectTo:'empleados',pathMatch:'full'},
  {path:'empleados/registrar',component: RegistrarEmpleadoComponent},
  {path:'**',component: NotFound404Component} //wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
