import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kadu-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './kadu-todo-list.component.html',
  styleUrl: './kadu-todo-list.component.scss',
})
export class KaduTodoListComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.listaDeItens);
  }
  valorInput: string = '';
  listaDeItens: string[] = ['Guitarra', 'Baixo', 'Bateria', 'Violão', 'Vocal'];

  adicionar() {
    // Adiciona o item na lista
    this.listaDeItens.push(this.valorInput);

    // Apagar o conteúdo do campo de input
    this.valorInput = '';
  }

  excluirItem(indice: number) {
    // Exclui um item da lista de acordo com o índice que  é passado por parâmetro
    this.listaDeItens.splice(indice, 1);
  }
}
