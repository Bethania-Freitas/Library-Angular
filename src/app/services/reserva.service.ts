import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Reservas } from '../models/reservas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private url = environment.api;

  constructor(private httpClient: HttpClient) {}

  obterReservas(idLivro: string): Observable<Reservas[]> {
    return this.httpClient.get<Reservas[]>(`${this.url}/${idLivro}/reservas`);
  }
}
