import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibrosComponent } from './libros/libros.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'detalles/:id', component: LibroDetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/home' }
];
