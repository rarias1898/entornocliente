import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }

  nombre: String = "Ángel Arias Domínguez"
  descripcion: String = "Examen Entorno Cliente"

  toSerie() {
    this.router.navigate(['/serie'])
  }

  toFormulario() {
    this.router.navigate(['/formulario'])
  }
}
