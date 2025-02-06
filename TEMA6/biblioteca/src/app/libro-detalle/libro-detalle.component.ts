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
export class LibroDetalleComponent {

  id: number = 0;

  constructor(private act: ActivatedRoute, private libroService: LibrosService) { 
    this.id = this.act.snapshot.params['id'];
    console.log(this.id)
    
  }

  libro: Libro[] = [];
  
  // getLibroById(id: number) {
  //   this.libro = this.libroService.getLibroById(id);
  // }
  
  title: string = 'Detalle del libro'
}
