import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CRUDComponent } from './crud/crud.component';
import { GaleriaComponent } from './galeria/galeria.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard/:user', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'crud', component: CRUDComponent },
  { path: 'galeria', component: GaleriaComponent },
];
