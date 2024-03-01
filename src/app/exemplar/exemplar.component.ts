import { ExemplarService } from './../services/exemplar.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exemplares } from '../models/exemplares.model';

@Component({
  selector: 'app-exemplar',
  templateUrl: './exemplar.component.html',
  styleUrl: './exemplar.component.scss',
})
export class ExemplarComponent {
  title = 'Exemplares';

  exemplares$ = new Observable<Exemplares[]>();

  exemplarId: number = 0;
  quantidade: number = 0;

  constructor(
    private exemplarService: ExemplarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.exemplarId = +params['id'];
      // this.obterQuantidadeCadastrada();
    });
  }

  adicionar(quantidade: number) {
    this.exemplarService.somar(this.exemplarId, quantidade);
  }

  // remover(quantidade: number) {
  //   this.exemplarService.diminuir(this.exemplarId, quantidade);
  // }
}
