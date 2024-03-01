import { Livros } from './../models/livros.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private url = environment.api;

  constructor(private httpClient: HttpClient) {}

  obterLivro() {
    return this.httpClient.get<Livros[]>(this.url);
  }

  cadastrarLivro(book: Livros): Observable<Livros> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<Livros>(this.url, book, { headers });
  }

  editarLivro(book: Livros) {
    return this.httpClient.put<Livros>(`${this.url}/${book.id}`, book);
  }

  inativarLivro(id: number) {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
