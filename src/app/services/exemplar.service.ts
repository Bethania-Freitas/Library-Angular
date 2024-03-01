import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Exemplares } from '../models/exemplares.model';
import { Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExemplarService {
  private url = environment.api;

  constructor(private httpClient: HttpClient) {}

  somar(id: string, exemplar: Exemplares) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<Exemplares>(
      `${this.url}/${id}/exemplares`,
      exemplar,
      { headers }
    );
  }

  diminuir(id: string, exemplar: Exemplares) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.request<Exemplares>(
      'delete',
      `${this.url}/${id}/reservas`,
      { body: exemplar, headers }
    );
  }
}
