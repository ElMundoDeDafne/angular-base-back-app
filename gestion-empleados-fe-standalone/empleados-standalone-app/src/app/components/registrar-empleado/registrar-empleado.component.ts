import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../classes/empleado';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrl: './registrar-empleado.component.css'
})
export class RegistrarEmpleadoComponent implements OnInit{

  empleado : Empleado = new Empleado();

  constructor(){}

  ngOnInit(): void {
    console.log(this.empleado);  
  }

  /** definimos metodos para usar en front*/
  onSubmit(){
    console.log(this.empleado);
  }
}
