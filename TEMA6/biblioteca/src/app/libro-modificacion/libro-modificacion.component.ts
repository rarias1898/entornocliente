import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private act: ActivatedRoute, private libroService: LibrosService) { }

  libro?: Libro
  
  libroModif = {id: this.libro?.id, titulo: this.libro?.titulo, autor: this.libro?.autor  }

  ngOnInit(): void {
    let id = this.act.snapshot.params['id']
    this.libro = this.libroService.getLibroById(id)
  }

  modificarLibro() {

  }
}
