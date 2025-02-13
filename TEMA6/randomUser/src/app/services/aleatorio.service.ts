import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AleatorioService {

  constructor(private http: HttpClient) { }

  private url: String = 'https://randomuser.me/api/'
}
