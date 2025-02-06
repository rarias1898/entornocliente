import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Libro } from '../models/libro';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-libros',
  imports: [CommonModule, RouterLink],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit {

  constructor(private libroService: LibrosService) { }

  listaLibros: Libro[] = []

  ngOnInit(): void {
    this.listaLibros = this.libroService.getLibros();
  }

  title: string = 'Libros de la biblioteca'
}
