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

  id: string = '';
  quantidade: string = '';

  constructor(
    private exemplarService: ExemplarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }

  adicionar() {
    const quantidadeComoNumero = +this.quantidade;

    if (isNaN(quantidadeComoNumero) || quantidadeComoNumero <= 0) {
      console.error('Quantidade inválida');
      return;
    }

    const exemplar: Exemplares = {
      quantidade: quantidadeComoNumero,
    };

    this.exemplarService.somar(this.id, exemplar).subscribe((_) => {
      this.quantidade = '';
    });
  }

  remover() {
    const quantidadeComoNumero = +this.quantidade;

    if (isNaN(quantidadeComoNumero) || quantidadeComoNumero <= 0) {
      console.error('Quantidade inválida');
      return;
    }

    const exemplar: Exemplares = {
      quantidade: quantidadeComoNumero,
    };

    this.exemplarService.diminuir(this.id, exemplar).subscribe((_) => {
      this.quantidade = '';
    });
  }
}
