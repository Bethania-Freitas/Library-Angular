import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { LivroService } from './services/livro.services';
import { Livros } from './models/livros.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Library-Angular';

  livros$ = new Observable<Livros[]>();

  id = '';
  titulo = '';
  autor = '';
  ano_publicacao = '';

  constructor(private livroService: LivroService) {
    this.obterLivrosCadastrados();
  }

  obterLivrosCadastrados() {
    this.livros$ = this.livroService.obterLivro();
  }

  cadastrarNovoLivro() {
    if (!this.titulo || !this.autor) return;
    this.livroService
      .cadastrarLivro({
        titulo: this.titulo,
        autor: this.autor,
        ano_publicacao: this.ano_publicacao,
        ativo: true,
      })
      .subscribe((_) => this.obterLivrosCadastrados());
  }

  preencherCampos(book: Livros) {}
}
