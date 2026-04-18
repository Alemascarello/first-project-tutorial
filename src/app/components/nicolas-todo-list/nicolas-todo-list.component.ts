import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nicolas-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nicolas-todo-list.component.html',
  styleUrl: './nicolas-todo-list.component.scss'
})
export class NicolasTodoListComponent {ngOnInit(): void {
    console.log(this.listaDeItens);
  }
  valorInput: string = '';
  listaDeItens: string[] = ['Victor', 'Nikão', 'Ale', 'Kadu'];

  adicionar() {
    this.listaDeItens.push(this.valorInput);
    this.valorInput = '';
  }

  excluirItem(indice: number) {
    this.listaDeItens.splice(indice, 1);
  }

}
