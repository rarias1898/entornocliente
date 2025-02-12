import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from '../services/libros.service';
import { Libro } from '../models/libro';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libro-modificacion',
  imports: [FormsModule],
  templateUrl: './libro-modificacion.component.html',
  styleUrl: './libro-modificacion.component.css'
})
export class LibroModificacionComponent implements OnInit {

  libroModif: Libro = {id: 0, titulo: '', autor: ''}

  constructor(private act: ActivatedRoute, private libroService: LibrosService, private router: Router) { }

  ngOnInit(): void {
    let id = this.act.snapshot.params['id']
    const libro = this.libroService.getLibroById(Number(id));
    
    if (libro) {
      this.libroModif.id = libro.id;
      this.libroModif.titulo = libro.titulo;
      this.libroModif.autor = libro.autor;
    } else {
      console.log('Libro no encontrado');
    }
  }

  modificarLibro() {
    this.libroService.modificarLibro(this.libroModif)
    this.router.navigate(['/libros']);
  }
}
