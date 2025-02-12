import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  usuario$ = new Observable<Usuario>()

  constructor(private usuarioService: UsuarioService) { }

  title: string = "Usuario"

  id: String = ""

  enviarId() {
    this.usuario$ = this.usuarioService.getUsuarioById(Number(this.id))
  }
}
