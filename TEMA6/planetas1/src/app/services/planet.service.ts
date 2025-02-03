import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelperPlanet, Planet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  private url = `https://swapi.dev/api/planets/`

  getPlanets(page: number = 1): Observable<HelperPlanet> {
    return this.http.get<HelperPlanet>(`${this.url}?page=${page}`)
  }

  getPlanet(num: number = 1): Observable<Planet> {
    return this.http.get<Planet>(`${this.url}/${num}`)
  }
}
