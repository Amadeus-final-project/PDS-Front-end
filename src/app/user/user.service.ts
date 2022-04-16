import { Injectable } from '@angular/core';
import {EditUser, IUser, RegisterUser, forgottenUser} from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: IUser | undefined;


  public get isLogged(): boolean {
    return !!sessionStorage.getItem('token');
  }
    //https://pds-backend.herokuapp.com/users
  public baseUsersURL ="http://localhost:9000/users";


  constructor(private httpClient: HttpClient) { }

  registerUser: RegisterUser | undefined;
  loginUsers: IUser | undefined;
  editUser: EditUser |undefined;

  isLoggedIn:boolean = false;


}

export class UserRole {
  readonly token = sessionStorage.getItem('token');
  if(token: string) {
    const userPayload = JSON.parse(atob(token.split('.')[1]));
    const role = userPayload.role;
  }
}
  