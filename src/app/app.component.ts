import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
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
