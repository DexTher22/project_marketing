import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  builder = inject(FormBuilder);
  readonly roles = [
    { value: 'advertiser', label: 'Cég / Hirdető' },
    { value: 'creator', label: 'Kreatív / Influenszer' },
  ] as const;

  registerForm = this.builder.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(8)]],
    password_confirm: ['',[Validators.required]],
    role: ['', [Validators.required]]
  });

  onSubmit(){
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    console.log(this.registerForm.value);
  }

  passwordMatch(){
    return this.registerForm.get('password')?.value === this.registerForm.get('password_confirm')?.value
  }

}
