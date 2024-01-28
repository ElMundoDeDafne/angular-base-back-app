import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaEmpleadosComponent } from "./lista-empleados/lista-empleados.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListaEmpleadosComponent]
})


export class AppComponent {
  title = 'gestion-empleados-frontend';
}
