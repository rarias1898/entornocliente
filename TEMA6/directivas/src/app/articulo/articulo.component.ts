import { Component } from '@angular/core';
import { Articulo } from '../model/articulo.model'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListadoArticulosComponent } from '../listado-articulos/listado-articulos.component';

@Component({
  selector: 'app-articulo',
  imports: [FormsModule, CommonModule, ListadoArticulosComponent],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {
  title: string = "Componente articulo"

  articulos: Articulo[] = [
    { nombre: 'Articulo 1', precio: 10, unidades: 5 },
    { nombre: 'Articulo 2', precio: 20, unidades: 3 },
    { nombre: 'Articulo 3', precio: 15, unidades: 8 }
  ];

  articuloNuevo: Articulo = {
    nombre: "",
    precio: 0,
    unidades: 0
  }

  enviarDatos() {
    this.articulos.push(this.articuloNuevo)
    console.log(this.articulos)
  }
}
