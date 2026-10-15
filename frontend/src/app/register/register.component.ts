import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  builder = inject(FormBuilder);

  registerForm = this.builder.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(8)]],
    password_confirm: ['',[Validators.required]]
  });

  onSubmit(){
    console.log(this.registerForm.value);
  }

  passwordMatch(){
    return this.registerForm.get('password')?.value === this.registerForm.get('password_confirm')?.value
  }

}
