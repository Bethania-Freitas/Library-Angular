import { ExemplarService } from './../services/exemplar.service';
import { Observable } from 'rxjs';
import { DataService } from './../services/data.service';
import { Component } from '@angular/core';
import { Reservas } from '../models/reservas.model';
import { Router } from '@angular/router';
import { Exemplares } from '../models/exemplares.model';

@Component({
  selector: 'app-exemplar',
  templateUrl: './exemplar.component.html',
  styleUrl: './exemplar.component.scss',
})
export class ExemplarComponent {
  title = 'Exemplares';
  tituloLivro!: string;

  exemplares$ = new Observable<Exemplares[]>();

  quantidade = '';

  constructor(
    private dataService: DataService,
    private exemplarService: ExemplarService,
    private router: Router
  ) {
    this.tituloLivro = this.dataService.getInformacao();
    this.obterQuantidadeCadastrada();
  }

  obterQuantidadeCadastrada() {
    this.exemplares$ = this.exemplarService.obterQuantidade();
  }
}
