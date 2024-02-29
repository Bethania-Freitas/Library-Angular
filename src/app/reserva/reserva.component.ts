import { Reservas } from './../models/reservas.model';
import { ReservaService } from './../services/reserva.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.scss',
})
export class ReservaComponent implements OnInit {
  title = 'Reservas';

  reservas$ = new Observable<Reservas[]>();

  id = '';
  usuario = '';
  data_inicio = '';
  data_fim = '';

  constructor(
    private reservaService: ReservaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idFromRoute = params.get('id')!;
      this.id = idFromRoute;
      this.obterReservasCadastradas();
    });
  }

  obterReservasCadastradas() {
    this.reservas$ = this.reservaService.obterReservas(this.id);
  }

  NovaReserva() {}
}
