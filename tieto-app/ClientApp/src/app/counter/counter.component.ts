import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {


  public index = 0;
  fibonacciNumber: number;
  values = '';

  public calculateFibonacciNumber() {
    this.index++;
    this.fibonacciNumber = this.calculate(this.index);
    this.values += this.fibonacciNumber + ' | ';
  }

  private calculate(i: number): number {
    return (i <= 2) ? 1 : this.calculate(i - 1) + this.calculate(i - 2);
  }

}
