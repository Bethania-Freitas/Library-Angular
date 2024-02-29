import { Livros } from '../models/livros.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private tituloLivro!: string;

  getInformacao(): string {
    return this.tituloLivro;
  }

  constructor() {}
}
