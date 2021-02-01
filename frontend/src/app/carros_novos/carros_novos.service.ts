import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { Crisis } from './carros_novos';
import { CRISES } from './mock-crises';

@Injectable({
  providedIn: 'root',
})
export class CarrosNovosService {
  getCacrrosNovos(): any {
    throw new Error('Method not implemented.');
  }
  getNovos(): any {
    throw new Error('Method not implemented.');
  }
  static nextCrisisId = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

  constructor(private messageService: MessageService) { }

  getCrises() { return this.crises$; }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      map(crises => crises.find(crisis => crisis.id === +id))
    );
  }

  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      const crisis = { id: CarrosNovosService.nextCrisisId++, name };
      CRISES.push(crisis);
      this.crises$.next(CRISES);
    }
  }
}


