import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from './services/pokemon-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private servicioPokemon: PokemonServiceService) {}

  pokemonList$ = new Observable<any>();

  ngOnInit(): void {
    this.pokemonList$ = this.servicioPokemon.getPokemonList();
  }

  title = 'Pokemon';
}
