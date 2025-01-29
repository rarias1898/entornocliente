import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-caracteristicas-articulo',
  imports: [FormsModule],
  templateUrl: './caracteristicas-articulo.component.html',
  styleUrl: './caracteristicas-articulo.component.css'
})
export class CaracteristicasArticuloComponent {
  title: string = "Caracteristicas Articulo"

  caracteristica: string = ""

  @Output()
  selected = new EventEmitter<any>();

  enviarAlPadre() {
    this.selected.emit(this.caracteristica)
  }
}
