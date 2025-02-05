import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros: Libro[] = [
    {id: 1, titulo: 'El Quijote', autor: 'Cervantes'},
    {id: 2, titulo: 'El lazarillo de Tormes', autor: 'Anónimo'},
    {id: 3, titulo: 'La Celestina', autor: 'Fernando de Rojas'},
    {id: 4, titulo: 'La Odisea', autor: 'Homero'},
  ]

  constructor() { }

  getLibros(): Libro[] {
    return this.libros;
  }
}
