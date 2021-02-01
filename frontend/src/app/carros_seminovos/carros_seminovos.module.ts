import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarrosSemiNovosListaComponent } from './carros_seminovos-lista/carros_seminovos-lista.component';
import { CarrosSemiNovosDetalheComponent } from './carros_seminovos-detalhe/carros_seminovos-detalhe.component';

import { CarrosSemiNovosRoutingModule } from './carros_seminovos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarrosSemiNovosRoutingModule
  ],
  declarations: [
    CarrosSemiNovosListaComponent,
    CarrosSemiNovosDetalheComponent
  ]
})
export class CarrosSemiNovosModule {}

