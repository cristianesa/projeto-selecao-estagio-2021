import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarrosSemiNovosListaComponent } from './carros_seminovos-lista/carros_seminovos-lista.component';
import { CarrosSemiNovosDetalheComponent } from './carros_seminovos-detalhe/carros_seminovos-detalhe.component';

const heroesRoutes: Routes = [
  { path: 'heroes', redirectTo: '/superheroes' },
  { path: 'hero/:id', redirectTo: '/superhero/:id' },
  { path: 'superheroes',  component: CarrosSemiNovosListaComponent, data: { animation: 'heroes' } },
  { path: 'superhero/:id', component: CarrosSemiNovosDetalheComponent, data: { animation: 'hero' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CarrosSemiNovosRoutingModule { }

