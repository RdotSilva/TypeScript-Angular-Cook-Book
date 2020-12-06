import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  suggestUserName(): void {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm): void {
    console.log(form);
  }
}
