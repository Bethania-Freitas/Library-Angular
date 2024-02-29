import { Reservas } from './../models/reservas.model';
import { ReservaService } from './../services/reserva.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.scss',
})
export class ReservaComponent {
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

  obterReservasCadastradas() {
    this.reservas$ = this.reservaService.obterReservas(this.id);
  }

  NovaReserva() {
    if (!this.usuario || !this.data_inicio) return;
    this.reservaService
      .gerarReserva({
        usuario: this.usuario,
        data_inicio: this.data_inicio,
        data_fim: this.data_fim,
      })
      .subscribe((_) => this.obterReservasCadastradas());
  }
}
