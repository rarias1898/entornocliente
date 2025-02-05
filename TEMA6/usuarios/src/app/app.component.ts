import { Component } from '@angular/core';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';

@Component({
  selector: 'app-root',
  imports: [ListadoUsuariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'usuarios';
}
