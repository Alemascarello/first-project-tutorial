import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.scss',
})
export class TesteComponent {
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
