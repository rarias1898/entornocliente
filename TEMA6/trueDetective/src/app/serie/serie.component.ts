import { Component, OnInit } from '@angular/core';
import { SerieService } from '../services/serie.service';
import { Observable } from 'rxjs';
import { Serie } from '../models/Serie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serie',
  imports: [CommonModule],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css'
})
export class SerieComponent implements OnInit {

  serie$ = new Observable<Serie>()

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.serie$ = this.serieService.getSerie()
  }
}
