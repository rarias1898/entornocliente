import { Routes } from '@angular/router';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { DetallesComponent } from './detalles/detalles.component';

export const routes: Routes = [
  { path: '', component: ListaPeliculasComponent },
  { path: 'peliculas', component: ListaPeliculasComponent },
  { path: 'peliculas/:id', component: DetallesComponent },
  { path: '**', redirectTo: '/peliculas' }
];
