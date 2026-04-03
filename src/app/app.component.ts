import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  primeiroValor = 3;
  segundoValor = 2;
  resultado = 0;

  somar() {
    this.resultado = this.primeiroValor + this.segundoValor;
  }
}
