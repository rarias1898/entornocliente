import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResumenComponent } from '../resumen/resumen.component';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, CommonModule, ResumenComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  title: String = "Formulario valoración"

  datosFormulario = {
    serie: "",
    correo: "",
    nombre: ""
  }

  datosParaHijo: any = null
  errorMsg: Boolean = false
  
  enviarAlHijo() {
    if (this.datosFormulario.correo === '') {
      this.errorMsg = true
      return
    }

    this.errorMsg = false
    this.datosParaHijo = {...this.datosFormulario}
  }

  valoracion: String = ""

  recibirValoracion(event: String) {
    this.valoracion = event
  }
}
