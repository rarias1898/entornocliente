import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-usuario',
  imports: [CommonModule],
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css'
})
export class DetalleUsuarioComponent implements OnInit {

  usuario$ = new Observable<Usuarios>();

  constructor(private usuarioService: UsuariosService, private act: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let id = Number(this.act.snapshot.params['id'])
    this.usuario$ = this.usuarioService.getUsuarioById(id)
  }

  volver() {
    this.router.navigate(["/usuarios"])
  }
}
