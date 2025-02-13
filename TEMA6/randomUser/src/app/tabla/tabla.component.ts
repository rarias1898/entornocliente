import { Component, OnInit } from '@angular/core';
import { AleatorioService } from '../services/aleatorio.service';
import { Observable } from 'rxjs';
import { Response } from '../models/aleatorio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit{

  listaUsers$ = new Observable<Response>

  constructor(private aleatorioService: AleatorioService) { }

  ngOnInit(): void {
    this.listaUsers$ = this.aleatorioService.getTenUsers()
  }


}
