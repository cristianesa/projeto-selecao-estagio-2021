import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { CarrosSemiNovos } from './carros_seminovos';
import { HEROES } from './mock-heroes';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CarrosSemiNovosService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<CarrosSemiNovos[]> {

    this.messageService.add('CarrosSemiNovosService: fetched seminovos');
    return of(CarrosSemiNovos);
  }

  getHero(id: number | string) {
    return this.getCarrosSemiNovos().pipe(

      map((seminovos: CarrosSemiNovos[]) => seminovos.find(hero => hero.id === +id))
    );
  }
  getCarrosSemiNovos() {
    throw new Error('Method not implemented.');
  }
}


