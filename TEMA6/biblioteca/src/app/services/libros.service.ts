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

  getLibroById(id: number) {
    return this.libros.find(libro => Number(libro.id) === id);
  }

  addLibro(libro: Libro) {
    libro.id = this.libros.length + 1

    this.libros.push(libro);
  }

  modificarLibro(libro: Libro) {
    const index = this.libros.findIndex(l => l.id === libro.id);
    if (index !== -1) {
      this.libros[index] = { ...libro };
    }
  }
}
