import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/aleatorio';

@Injectable({
  providedIn: 'root'
})
export class AleatorioService {

  constructor(private http: HttpClient) { }

  private url: string = 'https://randomuser.me/api/'

  getRandomUser(): Observable<Response> {
    return this.http.get<Response>(this.url)
  }

  getTenUsers(): Observable<Response> {
    return this.http.get<Response>(`${this.url}?results=10`)
  }
}
