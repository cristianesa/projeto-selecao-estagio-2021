import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CarrosNovosService } from '../carros_novos.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-carros_novos-lista',
  templateUrl: './carros_novos-lista.component.html',
  styleUrls: ['./carros_novos-lista.component.css']
})
export class CarrosNovosListaComponent implements OnInit {
  carrosnovos$: Observable<CarrosNovos[]>;
  selectedId: number;
  novos$: Observable<unknown>;

  constructor(
    private service: CarrosNovosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.carrosnovos$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getCacrrosNovos();
      })
    );
  }
}


