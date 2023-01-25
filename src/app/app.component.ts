import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  input:string = '';
  result:string = '';
  numero(num: string) {
    this.input = this.input + num
    this.calcular();
  }
  operacion(op: string) {
    this.input = this.input + op
    this.calcular();
  }
  limpiar() {
    this.result = '';
    this.input = '';
  }
  calcular() {
    let formula = this.input;
    console.log("Formula " +formula);
    this.result = eval(formula);
  }
  tomarCalulo() {
    this.calcular();
    this.input = this.result;
  }
}
