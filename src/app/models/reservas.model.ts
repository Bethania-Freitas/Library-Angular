import { Livros } from './livros.model';

export interface Reservas {
  id?: number;
  usuario: string;
  data_inicio: string;
  data_fim: string;
}
