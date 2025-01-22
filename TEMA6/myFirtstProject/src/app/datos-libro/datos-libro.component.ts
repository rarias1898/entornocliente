import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datos-libro',
  imports: [FormsModule],
  templateUrl: './datos-libro.component.html',
  styleUrl: './datos-libro.component.css',
})
export class DatosLibroComponent {
  title: string = 'COMPONENTE LIBRO';

  libro = {
    titulo: 'Titulo 1',
    autor: 'Autor 1',
    precio: 20,
    stock: 0,
    cantidad: 5,
    imagen:
      'https://m.media-amazon.com/images/I/81pzG7oNfHL._UF1000,1000_QL80_.jpg',
  };

  disabled: boolean = false

  anadirCantidad() {
    this.libro.cantidad ++
  }

  restarCantidad() {
    this.libro.cantidad --
  }

  imprimirPos() {
    console.log("hola")
  }

  @Input()
  prueba: string = ""

  @Output()
  enviar = new EventEmitter<string>()
  
  username: string = "Angeeeeel"

  pasarAlPadre() {
    this.enviar.emit(this.username)
  }
}
