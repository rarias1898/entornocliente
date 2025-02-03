import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../services/planet.service';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet';

@Component({
  selector: 'app-planet-details',
  imports: [CommonModule],
  templateUrl: './planet-details.component.html',
  styleUrl: './planet-details.component.css'
})
export class PlanetDetailsComponent implements OnInit {

  planeta$ = new Observable<Planet>()

  constructor(private planetaService: PlanetService) {}

  ngOnInit(): void {
    this.planeta$ = this.planetaService.getPlanet(2)
    throw new Error('Method not implemented.');
  }
  title: string = "Detalles de planeta"


}
