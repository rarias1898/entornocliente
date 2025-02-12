import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuarios } from '../models/usuarios';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent implements OnInit {

  listaUsuarios$ = new Observable<Usuarios[]>()

  constructor(private usuarioService: UsuariosService) {}


  ngOnInit(): void {
    this.listaUsuarios$ = this.usuarioService.getUsuarios()
  }
}
