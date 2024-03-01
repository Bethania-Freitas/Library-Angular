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

  obterQuantidade(idLivro: string): Observable<Exemplares[]> {
    return this.httpClient.get<Exemplares[]>(
      `${this.url}/${idLivro}/exemplares`
    );
  }

  somar(id: number, quantidade: number) {
    console.log(`Chamando somar com id: ${id} e quantidade: ${quantidade}`);
    const url = `${this.url}/${id}/exemplares`;
    return this.httpClient.post<Exemplares>(url, { quantidade });
  }

  // diminuir(id: number, quantidade: number) {
  //   console.log(`Chamando somar com id: ${id} e quantidade: ${quantidade}`);
  //   const url = `${this.url}/${id}/exemplares`;
  //   return this.httpClient.delete<Exemplares>(url, { quantidade });
  // }
}
