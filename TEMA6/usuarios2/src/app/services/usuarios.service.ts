import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  private url: string = "https://jsonplaceholder.typicode.com/users"

  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.url)
  }

  getUsuarioById(id: Number): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${this.url}/${id}`)
  }
}
