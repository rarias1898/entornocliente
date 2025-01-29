import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../model/persona.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-personas',
  imports: [CommonModule, FormsModule],
  templateUrl: './listado-personas.component.html',
  styleUrl: './listado-personas.component.css'
})
export class ListadoPersonasComponent {
  title: string = "Listado Personas"

  @Input()
  per!: Persona;

  @Output()
  mayor = new EventEmitter<any>()

  // nombre: string = this.per.nombre

  enviarAlPadre() {
    this.mayor.emit(this.per.nombre)
  }
}
