import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibrosComponent } from './libros/libros.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LibroNuevoComponent } from './libro-nuevo/libro-nuevo.component';
import { LibroModificacionComponent } from './libro-modificacion/libro-modificacion.component';

export const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'detalles/:id', component: LibroDetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'addlibro', component: LibroNuevoComponent },
  { path: 'update/:id', component: LibroModificacionComponent },
  { path: '**', redirectTo: '/home' }
];
