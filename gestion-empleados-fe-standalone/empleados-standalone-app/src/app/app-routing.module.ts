import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './components/empleados/lista-empleados/lista-empleados.component';

const routes: Routes = [
  {path: 'empleados',component:ListaEmpleadosComponent}, //añade rutas
  {path:'',redirectTo:'empleados',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
