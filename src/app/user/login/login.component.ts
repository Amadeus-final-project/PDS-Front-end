import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


class LoginResponse {
  token?: string;
  role: string | undefined;
}


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model: any = {};

  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient) {   }


login() { 
  let result = this.http.post<LoginResponse>('http://localhost:9000/login', {
    username: this.model.username,
    password: this.model.password
}).subscribe((response) => {
    if (response) {
        sessionStorage.setItem(
          "token", response.token || "");
          sessionStorage.setItem(
          "username", this.model.username || "");
          this.userService.isLoggedIn = true;
          // TODO: redirect /gateway
	this.router.navigate(['/gateway']);
    } else {
        alert("Authentication failed.")
    }
}, (error => alert(error)));
}
}
