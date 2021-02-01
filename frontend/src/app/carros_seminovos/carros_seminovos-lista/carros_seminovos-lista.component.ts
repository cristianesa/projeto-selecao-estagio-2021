// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CarrosSemiNovosService } from '../carros_seminovos.service';
import { CarrosSemiNovos } from '../carros_seminovos';

@Component({
  selector: 'carros_seminovos-lista',
  templateUrl: './carros_seminovos-lista.component.html',
  styleUrls: ['./carros_seminovos.component.css']
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<CarrosSemiNovos[]>;
  selectedId: number;

  constructor(
    private service: CarrosSemiNovosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {

        this.selectedId = +params.get('id');
        return this.service.getHeroes();
      })
    );
  }
}

