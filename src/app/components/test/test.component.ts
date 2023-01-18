import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent {
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
