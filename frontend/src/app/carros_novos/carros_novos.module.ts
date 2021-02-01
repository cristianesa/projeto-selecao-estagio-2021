import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CarrosNovosHomeComponent } from './carros_novos-home/carros_novos-home.component';
import { CarrosNovosListaComponent } from './carros_novos-lista/carros_novos-lista.component';
import { CarrosNovosComponent } from './carros_novos/carros_novos.component';
import { CarrosNovosDetalheComponent } from './carros_novos-detalhe/carros_novos-detalhe.component';

import { CarrosNovosRoutingModule } from './carros_novos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarrosNovosRoutingModule
  ],
  declarations: [
    CarrosNovosComponent,
    CarrosNovosListaComponent,
    CarrosNovosHomeComponent,
    CarrosNovosDetalheComponent
  ]
})
export class CarrosNovosModule {}


