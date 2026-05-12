import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  usernameForm = new FormGroup({
    username: new FormControl('', [Validators.minLength(3)]),
  });

  get username() {
    return this.usernameForm.get('username');
  }

  onSubmit() {
    console.log('Form Submitted!', this.usernameForm.value);
  }
}
