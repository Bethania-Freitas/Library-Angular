import { Livros } from './../models/livros.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private url = environment.api;

  constructor(private httpClient: HttpClient) {}

  obterLivro() {
    return this.httpClient.get<Livros[]>(this.url);
  }

  cadastrarLivro(book: Livros) {
    return this.httpClient.post<Livros>(this.url, book);
  }

  editarLivro(book: Livros) {
    return this.httpClient.put<Livros>(this.url, book);
  }
}
