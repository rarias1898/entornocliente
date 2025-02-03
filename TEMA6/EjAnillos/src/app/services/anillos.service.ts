import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personajes } from '../models/personajes';
import { Observable } from 'rxjs';

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

  // getPersonajes(): Observable<Personajes> {
  //   return this.personajes<Personajes> 
  // }
}
