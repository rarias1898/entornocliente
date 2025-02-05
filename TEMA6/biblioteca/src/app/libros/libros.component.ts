import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Libro } from '../models/libro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libros',
  imports: [CommonModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit {

  constructor(private libroService: LibrosService) { }

  listaLibros: Libro[] = []

  ngOnInit(): void {
    this.listaLibros = this.libroService.getLibros();
    throw new Error('Method not implemented.');
  }

  title: string = 'Libros de la biblioteca'
}
