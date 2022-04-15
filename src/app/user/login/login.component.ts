import { Component, OnInit } from '@angular/core';
import { UserRole, UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


class LoginResponse {
  token?: string;
  role: string | undefined;
}


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) {   }


  ngOnInit() {
    sessionStorage.setItem('token', '');
    sessionStorage.setItem('role', '');
}

//this.commonUrlObj.commonUrl+'/saveNewCategory'

login() { //https://localhost:9000/
  //let url = 'this.userService.baseUsersURL/login';
  let result = this.http.post<LoginResponse>('http://localhost:9000/login', {
    username: this.model.username,
    password: this.model.password
}).subscribe((response) => {
    if (response) {
        sessionStorage.setItem(
          "token", response.token || "");
          this.userService.isLoggedIn = true;
          // TODO: redirect /gateway
	this.router.navigate(['/home']);
    } else {
        alert("Authentication failed.")
    }
}, (error => alert(error)));
}
}
