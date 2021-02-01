import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-carros_novos-detalhe',
  templateUrl: './carros_novos-detalhe.component.html',
  styleUrls: ['./carros_novos-detalhe.component.css']
})
export class CarrosNovosDetalheComponent implements OnInit {
  carrosnovos: CarrosNovosDetalheComponent;
  editName: string;
  name: string;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { carrosnovos: CarrosNovos }) => {
        this.editName = data.carrosnovos.name;
        this.carrosnovos = data.carrosnovos;
      });
  }

  cancel() {
    this.gotoCarros();
  }

  save() {
    this.carrosnovos.name = this.editName;
    this.gotoCarros();
  }

  canDeactivate(): Observable<boolean> | boolean {

    if (!this.carrosnovos || this.carrosnovos.name === this.editName) {
      return true;
    }
    
    return this.dialogService.confirm('Discard changes?');
  }

  gotoCarros() {
    const novosId = this.carrosnovos ? this.carrosnovos.id : null;
    
    this.router.navigate(['../', { id: this.carrosnovos, foo: 'foo' }], { relativeTo: this.route });
  }
}

