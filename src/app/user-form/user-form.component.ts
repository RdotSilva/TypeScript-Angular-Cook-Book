import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  @ViewChild('f') signupForm: NgForm;

  suggestUserName(): void {
    const suggestedName = 'Superuser';
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
