import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Persona {
  nombre: string,
  apellido: string,
  edad: number
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Alta de usuarios';

  persona: Persona[] = [
    {
      nombre: "Angel",
      apellido: "Arias",
      edad: 28
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
}
