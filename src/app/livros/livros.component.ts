import { ActivatedRoute } from '@angular/router';
import { LivroService } from './../services/livro.services';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Livros } from '../models/livros.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.scss',
})
export class LivrosComponent implements OnInit {
  title = 'Livros';

  livros$ = new Observable<Livros[]>();

  id = '';
  autor = '';
  titulo = '';
  ano_publicacao = '';

  ngOnInit() {
    this.obterLivrosCadastrados();
  }

  constructor(private LivroService: LivroService, private router: Router) {}

  obterLivrosCadastrados() {
    this.livros$ = this.LivroService.obterLivro();
  }

  cadastrarNovoLivro() {
    if (!this.titulo || !this.autor) return;
    if (this.id !== null && this.id !== undefined) return;
    if (this.id) {
      this.atualizar();
    }
    this.LivroService.cadastrarLivro({
      titulo: this.titulo,
      autor: this.autor,
      ano_publicacao: this.ano_publicacao,
      ativo: true,
    }).subscribe((_) => this.obterLivrosCadastrados());
  }

  preencherCampos(book: Livros) {
    this.id = book.id!.toString();
    this.titulo = book.titulo;
    this.autor = book.autor;
    this.ano_publicacao = book.ano_publicacao;
  }

  atualizar() {
    this.LivroService.editarLivro({
      id: parseInt(this.id),
      titulo: this.titulo,
      autor: this.autor,
      ano_publicacao: this.ano_publicacao,
    }).subscribe((_) => this.obterLivrosCadastrados());
  }

  Inativar(id: number, disponibilidade: Livros) {
    if ((disponibilidade.ativo = true)) {
      this.LivroService.inativarLivro(id).subscribe((_) =>
        this.obterLivrosCadastrados()
      );
    }
    this.LivroService.ativarLivro(id);
  }

  Reservar(id: number): void {
    // this.router.navigate([`${id}/reservas`]);
  }
}
