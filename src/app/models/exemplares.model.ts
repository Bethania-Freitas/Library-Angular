import { Livros } from './livros.model';
export interface Exemplares {
  id: number;
  quantidade: number;
  livro: Livros;
}
