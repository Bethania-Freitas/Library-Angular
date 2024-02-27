import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Livros } from '../models/livros.model';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private url = environment.api;

  constructor(private httpClient: HttpClient) {}

  obterLivro() {
    return this.httpClient.get<Livros[]>(this.url);
  }
}
