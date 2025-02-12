import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../services/pelicula.service';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula';

@Component({
  selector: 'app-lista-peliculas',
  imports: [CommonModule],
  templateUrl: './lista-peliculas.component.html',
  styleUrl: './lista-peliculas.component.css'
})
export class ListaPeliculasComponent implements OnInit {

  listaPelis$ = new Observable<Pelicula[]>();

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.listaPelis$ = this.peliculaService.getPeliculas()
  }

}
