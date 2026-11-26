import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, title: 'Project Marketing' },
  { path: 'register', component: RegisterComponent, title: 'Regisztráció | Project Marketing' },
  { path: 'login', component: LoginComponent, title: 'Bejelentkezés | Project Marketing' },
  { path: 'profile', component: ProfileComponent, title: 'Profil | Project Marketing' },
  {
    path: 'home',
    component: DashboardComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent, title: 'Főoldal | Project Marketing' },
      { path: '**', redirectTo: '/home' },
    ],
  },
];
