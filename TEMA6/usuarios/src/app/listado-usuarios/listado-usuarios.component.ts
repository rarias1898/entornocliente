import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-usuarios',
  imports: [CommonModule],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent implements OnInit {

  listaUsuarios$ = new Observable<Usuario[]>();

  constructor(private usuarioService: UsuarioService) { }


  ngOnInit(): void {
    this.listaUsuarios$ = this.usuarioService.getUsuarios();
    throw new Error('Method not implemented.');
  }

  title: string = 'Listado de Usuarios';
}
