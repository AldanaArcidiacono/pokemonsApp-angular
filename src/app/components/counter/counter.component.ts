import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  counter = 0;

  increment() {
    this.counter++;
    console.log(this.counter);
  }

  decrement() {
    this.counter--;
    console.log(this.counter);
  }
}
