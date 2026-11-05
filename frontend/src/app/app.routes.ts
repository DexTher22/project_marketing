import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, title: 'Project Marketing' },
  { path: 'register', component: RegisterComponent, title: 'Regisztráció | Project Marketing' },
  { path: 'login', component: LoginComponent, title: 'Bejelentkezés | Project Marketing' },
];
