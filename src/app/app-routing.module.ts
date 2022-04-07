import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import {ProfileComponent} from "./user/profile/profile.component";
import { ForgottenPasswordComponent } from './user/forgottenPassword/forgottenPassword.component';
import { GetAllMyPackagesComponent } from './user/getAllMyPackages/getAllMyPackages.component';
import { Authentication } from './interceptors/authenticator';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', redirectTo: '/login'},
  {path: 'register', component: RegisterComponent, canActivate:[Authentication]},
  {path: 'profile', component: ProfileComponent, canActivate:[Authentication]},
  {path: 'getAllMyPackages', component: GetAllMyPackagesComponent, canActivate:[Authentication]},
  {path: 'forgottenPassword', component: ForgottenPasswordComponent},

  {path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
