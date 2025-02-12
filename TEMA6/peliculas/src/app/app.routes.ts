import { Routes } from '@angular/router';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';

export const routes: Routes = [
  { path: '', component: ListaPeliculasComponent },
  { path: 'peliculas', component: ListaPeliculasComponent },
  { path: '**', redirectTo: '/peliculas' }
];
