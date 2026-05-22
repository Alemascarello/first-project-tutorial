import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-ale',
  standalone: true,
  imports: [],
  templateUrl: './calculadora-ale.component.html',
  styleUrl: './calculadora-ale.component.scss',
})
export class CalculadoraAleComponent {
  telinha: string = '0';

  adicionaValor(numero: string) {
    if (this.telinha === '0') {
      this.telinha = numero;
    } else {
      this.telinha = this.telinha + numero;
    }
  }
}
