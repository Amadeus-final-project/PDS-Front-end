import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { AppModule } from '../app.module';
import {ProfileComponent} from "./profile/profile.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AppModule,
    FormsModule,
  ]
})
export class UserModule { }
