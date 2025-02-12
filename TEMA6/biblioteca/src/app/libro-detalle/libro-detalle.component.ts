import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from '../services/libros.service';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-libro-detalle',
  imports: [],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css'
})
export class LibroDetalleComponent implements OnInit {

  libro?: Libro;

  constructor(private act: ActivatedRoute, private libroService: LibrosService, private router: Router) { }


  ngOnInit(): void {
    let id = Number(this.act.snapshot.params['id']);
    this.libro = this.libroService.getLibroById(id);
  }
  
  volverAtras() {
    this.router.navigate(['/libros']);
  }
  
  title: string = 'Detalle del libro'
}
