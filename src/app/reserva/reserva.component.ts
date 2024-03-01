import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Reservas } from './../models/reservas.model';
import { ReservaService } from './../services/reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.scss',
})
export class ReservaComponent implements OnInit {
  title = 'Reservas';

  reservas$ = new Observable<Reservas[]>();

  id: string = '';
  usuario = '';
  data_inicio = '';
  data_fim = '';
  livro = '';

  constructor(
    private reservaService: ReservaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.obterReservasCadastradas();
  }

  obterReservasCadastradas() {
    this.reservas$ = this.reservaService.obterReservas(this.id);
  }

  NovaReserva() {
    if (!this.usuario || !this.data_inicio || !this.id) return;
    this.reservaService
      .gerarReserva(this.id, {
        usuario: this.usuario,
        data_inicio: this.data_inicio,
        data_fim: this.data_fim,
      })
      .subscribe(() => {
        this.obterReservasCadastradas();
        this.usuario = '';
        this.data_inicio = '';
        this.data_fim = '';
      });
  }
}
