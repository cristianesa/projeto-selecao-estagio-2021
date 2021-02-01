import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarrosNovosHomeComponent } from './carros_novos-home/carros_novos-home.component';
import { CarrosNovosListaComponent } from './carros_novos-lista/carros_novos-lista.component';
import { CarrosNovosComponent } from './carros_novos/carros_novos.component';
import { CarrosNovosDetalheComponent } from './carros_novos-detalhe/carros_novos-detalhe.component';

import { CanDeactivateGuard } from '../can-deactivate.guard';
import { CarrosNovosDetalheResolverService } from './carros_novos-detalhe/carros_novos-detalhe-resolver.service';

const CarrosNovosRoutes: Routes = [
  {
    path: '',
    component: CarrosNovosComponent,
    children: [
      {
        path: '',
        component: CarrosNovosListaComponent,
        children: [
          {
            path: ':id',
            component: CarrosNovosDetalheComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: CarrosNovosDetalheResolverService
            }
          },
          {
            path: '',
            component: CarrosNovosHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(CarrosNovosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CarrosNovosRoutingModule { }


