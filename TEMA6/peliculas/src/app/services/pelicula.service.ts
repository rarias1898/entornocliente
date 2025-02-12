import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<{ peliculas: Pelicula[] }>('peliculas.json').pipe(
      map(response => response.peliculas)
    );
  }
}
