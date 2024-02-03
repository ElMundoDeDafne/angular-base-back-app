import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../classes/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  //Esta URL obtiene listado de empleados desde BE
  private baseURL = "http://192.168.1.68:7091/api/v1/empleados";
  constructor(private httpClient : HttpClient) { }

  //obtiene los empleados
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  //registrar empleados
  registrarEmpleado(empleado : Empleado) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, empleado);
  }
}
