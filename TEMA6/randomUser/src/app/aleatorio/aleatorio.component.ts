import { Component, OnInit } from '@angular/core';
import { AleatorioService } from '../services/aleatorio.service';
import { Observable } from 'rxjs';
import { Response } from '../models/aleatorio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aleatorio',
  imports: [CommonModule],
  templateUrl: './aleatorio.component.html',
  styleUrl: './aleatorio.component.css'
})
export class AleatorioComponent implements OnInit {

  randomUser$ = new Observable<Response>

  constructor(private aleatorioService: AleatorioService) { }

  ngOnInit(): void {
    this.randomUser$ = this.aleatorioService.getRandomUser()
  }
}
