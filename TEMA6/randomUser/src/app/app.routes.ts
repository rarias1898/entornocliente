import { Routes } from '@angular/router';
import { AleatorioComponent } from './aleatorio/aleatorio.component';
import { TablaComponent } from './tabla/tabla.component';

export const routes: Routes = [
  { path: "", component: AleatorioComponent },
  { path: "aleatorio", component: AleatorioComponent },
  { path: "tabla", component: TablaComponent },
  { path: "**", redirectTo: "/aleatorio" }
];
