import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Articulo } from '../model/articulo.model';
import { CaracteristicasArticuloComponent } from '../caracteristicas-articulo/caracteristicas-articulo.component';

@Component({
  selector: 'app-listado-articulos',
  imports: [CommonModule, CaracteristicasArticuloComponent],
  templateUrl: './listado-articulos.component.html',
  styleUrl: './listado-articulos.component.css'
})
export class ListadoArticulosComponent {
  title: string = "Lista de articulos"

  @Input()
  articulos: Articulo[] = []
  
  @Input()
  articuloNuevo: Articulo[] = []

  carac: string = ""

  SeleccionarPadre(e: string) {
    this.carac = e
  }
}
