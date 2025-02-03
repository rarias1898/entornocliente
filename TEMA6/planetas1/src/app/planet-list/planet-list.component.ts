import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../services/planet.service';
import { HelperPlanet, Planet } from '../models/planet';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planet-list',
  imports: [CommonModule],
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.css'
})
export class PlanetListComponent implements OnInit {

  planetList$ = new Observable<HelperPlanet>()

  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.planetList$ = this.planetService.getPlanets(2)
    throw new Error('Method not implemented.');
  }
  title: string = "Planetas"
}
