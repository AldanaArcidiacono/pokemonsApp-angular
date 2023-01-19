import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
})
export class FormPageComponent {
  toggle: boolean = false;

  users: Array<string> = [];

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
  });

  onSubmit() {
    const fullUser = `${this.form.value.name} ${this.form.value.surname}`;
    this.users.push(fullUser);
    this.form.reset();
  }

  onToggle() {
    this.toggle = !this.toggle;
  }
}
