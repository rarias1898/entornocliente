import { Routes } from '@angular/router';
import { AleatorioComponent } from './aleatorio/aleatorio.component';

export const routes: Routes = [
  { path: "", component: AleatorioComponent },
  { path: "aleatorio", component: AleatorioComponent },
  { path: "**", redirectTo: "/aleatorio" }
];
