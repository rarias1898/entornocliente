import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serie } from '../models/Serie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient) { }

  private url = "https://api.tvmaze.com/shows/5"

  getSerie(): Observable<Serie> {
    return this.http.get<Serie>(this.url)
  }
}
