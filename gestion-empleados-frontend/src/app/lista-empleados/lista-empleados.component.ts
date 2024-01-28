import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent {
  empleados:Empleado[];

  ngOnInit():void{
    this.empleados=[{
      "id":1,
      "nombre":"Yamil",
      "apellido":"Castillo",
      "email":"ccyccov@gmail.com"
    }];
  }
}
