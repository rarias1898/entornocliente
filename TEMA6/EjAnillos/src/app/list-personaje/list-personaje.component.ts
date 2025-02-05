import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnillosService } from '../services/anillos.service';
import { Personajes } from '../models/personajes';

@Component({
  selector: 'app-list-personaje',
  imports: [CommonModule],
  templateUrl: './list-personaje.component.html',
  styleUrl: './list-personaje.component.css'
})
export class ListPersonajeComponent implements OnInit {

  constructor(private anillosService: AnillosService) { }

  personajes: Personajes[] = [];

  ngOnInit(): void {
    this.personajes = this.anillosService.getPersonajes();
    throw new Error('Method not implemented.');
  }

  delPersonaje(id: number) {
    this.anillosService.deletePersonaje(id);
    this.personajes = this.anillosService.getPersonajes();
  }
}
