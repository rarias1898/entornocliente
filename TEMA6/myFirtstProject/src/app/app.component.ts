import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatosLibroComponent } from './datos-libro/datos-libro.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, DatosLibroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  name: string = ""

  mostrarNombre = () => {
    this.name = "Ana"
  }

  cadena: string = ""

  pintarLetras = (event: any) => {
    this.cadena += event.target.value + ","
  }
  
  nombre: string = "Hola"

  // ----------ngModel-----------------
  contenidoDiv: string = ""

  upperCase: string = ""

  //----------tbla---------
  checked: boolean = true

  prueba: string = "pruebaaa"
  delPadre: string = ""

  seleccionarUsername(username: string) {
    this.delPadre = username
  }
}