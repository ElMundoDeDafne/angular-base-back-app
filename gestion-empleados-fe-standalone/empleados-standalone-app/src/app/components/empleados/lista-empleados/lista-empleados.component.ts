import { Component } from '@angular/core';

import { Empleado } from '../../../classes/empleado';
import { EmpleadoService } from '../../../services/empleado.service';
@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent {
  constructor(private empleadoService : EmpleadoService){}

  empleados:Empleado[];

  ngOnInit():void{
    // this.empleados=[{
    //   "id":1,
    //   "nombre":"Yamil",
    //   "apellido":"Castillo",
    //   "email":"ccyccov@gmail.com"
    // }];
    this.obtenerEmpleados();
  }

  private obtenerEmpleados(){
    this.empleadoService.obtenerListaDeEmpleados()
      .subscribe(dato => {
        this.empleados = dato;
      });
  }
}
