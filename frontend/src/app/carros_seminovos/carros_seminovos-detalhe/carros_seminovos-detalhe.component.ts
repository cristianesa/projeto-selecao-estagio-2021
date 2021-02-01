import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { CarrosSemiNovosService } from '../carros_seminovos.service';
import { CarrosSemiNovos } from '../carros_seminovos';

@Component({
  selector: 'app-carros_seminovos-detalhe',
  templateUrl: './carros_seminovos-detalhe.component.html',
  styleUrls: ['./carros_seminovos-detalhe.component.css']
})
export class CarrosSemiNovosDetalheComponent implements OnInit {
  hero$: Observable<CarrosSemiNovos>;
  carrosseminovos$: Observable<unknown>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CarrosSemiNovosService
  ) {}


  ngOnInit() {
    this.carrosseminovos$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')))
    );
  }

  gotoCarros(carros: CarrosSemiNovos) {
    const carrosId = CarrosSemiNovosDetalheComponent ? carros.id : null;
    
    this.router.navigate(['/supercarros', { id: carrosId, foo: 'foo' }]);
  }
}
