import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Reservas } from '../models/reservas.model';
import { Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private url = environment.api;

  constructor(private httpClient: HttpClient) {}

  obterReservas(idLivro: string): Observable<Reservas[]> {
    return this.httpClient.get<Reservas[]>(`${this.url}/${idLivro}/reservas`);
  }

  gerarReserva(reser: Reservas) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient
      .post<Reservas>(this.url, reser, { headers })
      .pipe(first());
  }
}
