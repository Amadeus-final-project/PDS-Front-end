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



  // loginUser(email:string, password:string){
  //   this.loginUsers = {
  //     email: email,
  //     password: password
  //   }
  //   this.isLoggedIn = true;
  //   return this.httpClient.post<any>(this.baseUsersURL + 'login', this.loginUsers);

  // }

  // register(username:string,firstName:string,lastName:string,password:string, confirmPassword:string,email:string ){
  //   this.registerUser = {
  //     username: username,
  //     firstName: firstName,
  //     lastName: lastName,
  //     password: password,
  //     confirmPassword: confirmPassword,
  //     email: email,

  //   }
  //   return this.httpClient.post<any>(this.baseUsersURL + 'register', this.registerUser);
  // }



//  login(username: string, password: string) {
      //TODO
 //     this.user = {
 //       email: 'proba@abv.bg',
 ///       username: username
 //     }
 // }

  // logout(): void {
  //     this.user = undefined;
  //     sessionStorage.clear;
  //     this.isLoggedIn = false;
  // }

//   editProfile(phoneNumber:string,firstName:string,lastName:string,email:string){
//     this.editUser = {
//         phoneNumber: phoneNumber,
//         firstName: firstName,
//         lastName: lastName,
//         email: email
//     }
//     return this.httpClient.put<any>(this.baseUsersURL + 'edit', this.editUser);

// }

// forgottenPassword(email:string){

//   return this.httpClient.put<any>(this.baseUsersURL + 'forgottenPassword', email)
// }

}
