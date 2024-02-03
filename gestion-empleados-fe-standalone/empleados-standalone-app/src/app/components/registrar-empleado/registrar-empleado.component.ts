import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../classes/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrl: './registrar-empleado.component.css'
})
export class RegistrarEmpleadoComponent implements OnInit{

  empleado : Empleado = new Empleado();

  constructor(private empleadoServicio:EmpleadoService, private router:Router){}

  ngOnInit(): void {
    console.log(this.empleado);  
  }

  /** definimos metodos para usar en front*/
  onSubmit(){
    console.log(this.empleado);
    
  }

  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpleados();
    }, error => console.log(error));
  }

  irALaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
  }
}
