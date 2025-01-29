import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticuloComponent } from './articulo/articulo.component';

import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { Persona } from './model/persona.model';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, ArticuloComponent, ListadoPersonasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Alta de usuarios';

  personas: Persona[] = [
    {
      nombre: "Angel",
      apellido: "Arias",
      edad: 17
    },
    {
      nombre: "Pepe",
      apellido: "Pepito",
      edad: 30
    },
  ]

  nombre: string = ""
  apellido: string = ""
  mensaje: string = ""
  alta: boolean = false

  altaUsuario() {
    this.alta = true
    this.mensaje = `${this.nombre} ${this.apellido}`
  }

  text: string = ""

  nostrarTexto(e: Event) {
    const boton = e.target as HTMLButtonElement;
    this.text = boton.textContent || ""
  }

  nombreDesdeElhijo: string = ""

  nombreDelHijo(e: Event) {
    // this.nombreDesdeElhijo = e
    console.log(e)
  }
}
