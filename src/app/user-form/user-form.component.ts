import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  suggestUserName(): void {
    const suggestedName = 'Superuser';
  }
}
