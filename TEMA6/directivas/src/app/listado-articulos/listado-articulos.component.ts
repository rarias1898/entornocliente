import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Articulo } from '../model/articulo.model';

@Component({
  selector: 'app-listado-articulos',
  imports: [CommonModule],
  templateUrl: './listado-articulos.component.html',
  styleUrl: './listado-articulos.component.css'
})
export class ListadoArticulosComponent {
  title: string = "Lista de articulos"

  @Input()
  articulos: Articulo[] = []
  
  @Input()
  articuloNuevo: Articulo[] = []

  
}
