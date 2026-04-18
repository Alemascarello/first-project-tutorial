import { Component, OnInit } from '@angular/core';

interface livro {
  nome: string;
  autor: string;
  isbn: number;
}

interface pessoa {
  nome: string;
  idade: number;
}

interface biblioteca {
  livros: livro[];
  clientes: pessoa[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  biblioteca1: biblioteca = {
    clientes: [
      {
        idade: 1,
        nome: 'teste',
      },
    ],
    livros: [
      {
        nome: 'dom casmurro',
        autor: 'machado assis',
        isbn: 12312412312 - 1,
      },
    ],
  };

  ngOnInit() {
    console.log(this.biblioteca1);
  }
}
