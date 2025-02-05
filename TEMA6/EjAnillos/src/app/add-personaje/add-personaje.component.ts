import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnillosService } from '../services/anillos.service';
import { Personajes } from '../models/personajes';

@Component({
  selector: 'app-add-personaje',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {

  id: number;

  constructor(private anillosService: AnillosService) {
    this.id = this.anillosService.getPersonajes().length + 1;
    this.personaje = {
      id: this.id,
      name: '',
      raza: '',
    };
  }
  
  personaje: Personajes;


  agregarPersonaje() {
    this.anillosService.addPersonaje(this.personaje);
    this.personaje = { id: this.personaje.id + 1, name: '', raza: '' };
  }
}
