import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  protected readonly loginForm = inject(FormBuilder).nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  protected readonly email = this.loginForm.controls.email;
  protected readonly password = this.loginForm.controls.password;
  protected passwordVisible = false;
  protected formChecked = false;

  protected get emailInvalid(): boolean {
    return this.email.touched && this.email.invalid;
  }

  protected get passwordInvalid(): boolean {
    return this.password.touched && this.password.invalid;
  }

  protected onSubmit(emailInput: HTMLInputElement, passwordInput: HTMLInputElement): void {
    this.loginForm.markAllAsTouched();
    this.formChecked = this.loginForm.valid;

    if (!this.formChecked) {
      const firstInvalidInput = this.loginForm.controls.email.invalid ? emailInput : passwordInput;
      firstInvalidInput.focus();
    }
  }
}
