import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private http: HttpClient) { }

  private url = "https://pokeapi.co/api/v2/pokemon";

  getPokemonList(){
    return this.http.get(this.url);
  }
}
