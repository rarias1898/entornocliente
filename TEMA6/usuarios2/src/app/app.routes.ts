import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "usuarios", component: ListaUsuariosComponent },
  { path: "detalles/:id", component: DetalleUsuarioComponent },
  { path: "**", redirectTo: "/home" }
];
