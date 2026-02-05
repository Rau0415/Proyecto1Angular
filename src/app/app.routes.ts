import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Listado } from './components/listado/listado';
import { Detalle } from './components/detalle/detalle';

export const routes: Routes = [
    {path: 'inicio', component: Inicio},
    {path: 'listado', component: Listado},
    {path: 'detalle/:id', component: Detalle},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: '**', component: Inicio}
];
