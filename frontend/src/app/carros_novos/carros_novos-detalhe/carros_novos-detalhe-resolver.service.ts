
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { CarrosNovosService } from '../carros_novos.service';

@Injectable({
  providedIn: 'root',
})
export class CarrosNovosDetalheResolverService implements Resolve<CarrosNovosDetalheResolverService> {
  constructor(private cs: CarrosNovosService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CarrosNovosDetalheResolverService> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.cs.getCacrrosNovos(id).pipe(
      take(1),
      mergeMap(CarrosNovos => {
        if (CarrosNovos) {
          return of(CarrosNovos);
        } else { 
          this.router.navigate(['/carros_novos']);
          return EMPTY;
        }
      })
    );
  }
}

