import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor(private http: HttpClient) { }

  private url: String = 'https://jsonplaceholder.typicode.com/users'

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${id}`)
  }
}
