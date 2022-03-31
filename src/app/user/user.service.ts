import { Injectable } from '@angular/core';
import {EditUser, IUser, RegisterUser} from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: IUser | undefined;


  get isLogged(): boolean {
    return !!this.user;
  }

  private baseURL ="http://localhost:9000/users/";
  private loginURL ="http://localhost:9000/users/login";
  private registerURL ="http://localhost:9000/users/register";
  private editUserURL = "http://localhost:9000/users/edit";


  constructor(private httpClient: HttpClient) { }

  registerUser: RegisterUser | undefined;
  loginUsers: IUser | undefined;
  editUser: EditUser |undefined;

  loginUser(email:string, password:string){
    this.loginUsers = {
      email: email,
      password: password
    }
    return this.httpClient.post<any>(this.loginURL, this.loginUsers);
  }

  register(username:string,firstName:string,lastName:string,password:string, confirmPassword:string,email:string ){
    this.registerUser = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      password: password,
      confirmPassword: confirmPassword,
      email: email,

    }
    return this.httpClient.post<any>(this.registerURL, this.registerUser);
  }



//  login(username: string, password: string) {
      //TODO
 //     this.user = {
 //       email: 'proba@abv.bg',
 ///       username: username
 //     }
 // }

  logout(): void {
      this.user = undefined;
  }
  editProfile(phoneNumber:string,firstName:string,lastName:string,email:string){
    this.editUser = {
        phoneNumber: phoneNumber,
        firstName: firstName,
        lastName: lastName,
        email: email
    }
    return this.httpClient.put<any>(this.editUserURL, this.editUser);


}

}
