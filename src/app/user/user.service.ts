import { Injectable } from '@angular/core';
import { IUser } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: IUser | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  //private baseURL ="http://localhost:9000/users/";
  private loginURL ="http://localhost:9000/users/login";


  constructor(private httpClient: HttpClient) { }


  loginUsers: IUser | undefined;

  loginUser(email:string, password:string){
    this.loginUsers = {
      email: email,
      password: password
    }
    return this.httpClient.post<any>(this.loginURL, this.loginUsers);
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

}
