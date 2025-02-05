import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibrosComponent } from './libros/libros.component';

export const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'libros', component: LibrosComponent },
  { path: '**', redirectTo: '/home' }
];
