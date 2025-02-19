import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resumen',
  imports: [FormsModule],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent {

  @Input()
  data: any

  title: String = "Resumen de la solicitud"

  valoracion: String = ""

  @Output()
  selected = new EventEmitter<String>()

  enviarValoracion() {
    this.selected.emit(this.valoracion)
  }
}
