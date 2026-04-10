import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ale-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ale-todo-list.component.html',
  styleUrl: './ale-todo-list.component.scss',
})
export class AleTodoListComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.listaDeItens);
  }
  valorInput: string = '';
  listaDeItens: string[] = ['Victor', 'Nikão', 'Ale', 'Kadu'];

  adicionar() {
    // Adiciona o item na lista
    this.listaDeItens.push(this.valorInput);

    // Apagar o conteúdo do campo de input
    this.valorInput = '';
  }

  excluirItem(indice: number) {
    // Eclui um item da lista de acordo com o índice que é passado por parâmetro
    this.listaDeItens.splice(indice, 1);
  }
}

// *Desafio da semana**
// Criar uma todo list com os seguintes aspectos:
//  - Lista com todos o itens adicionados
//  - Botão para adicionar o item digitado à lista
//  - Cada item da lista deve ter um botão para excluir ele da lista
//  - Um botão geral para limpar a lista toda
