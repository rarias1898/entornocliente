import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibrosService } from '../services/libros.service';
import { Libro } from '../models/libro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro-nuevo',
  imports: [FormsModule],
  templateUrl: './libro-nuevo.component.html',
  styleUrl: './libro-nuevo.component.css'
})
export class LibroNuevoComponent {

  constructor(private libroService: LibrosService, private router: Router) { }

  nuevoLibro: Libro = { id: 0, titulo: "", autor: "" }

  anadirLibro() {
    this.libroService.addLibro(this.nuevoLibro)
    this.router.navigate(['/libros'])
  }
}
