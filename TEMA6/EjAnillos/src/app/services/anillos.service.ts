import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personajes } from '../models/personajes';

@Injectable({
  providedIn: 'root'
})
export class AnillosService {

  personajes: Personajes[] = [
    { id: 1, name: "Aragorn", raza: "Hombre"},
    { id: 2, name: "Frodo", raza: "Hobbit" },
    { id: 3, name: "Legolas", raza: "Elfo" },
    { id: 4, name: "Gandalf", raza: "Istar" }
  ] 

  constructor(private http: HttpClient) { }

  getPersonajes() {
    return this.personajes;
  }

  deletePersonaje(id: number) {
    return this.personajes = this.personajes.filter(x => x.id !== id);
  }

  addPersonaje(personaje: Personajes) {
    return this.personajes.push(personaje);
  }
}
