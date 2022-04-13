import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
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
  let result = this.http.post<LoginResponse>(this.userService.baseUsersURL + '/login', {
    username: this.model.username,
    password: this.model.password
}).subscribe((response) => {
    if (response) {
        sessionStorage.setItem(
          "token", response.token || "");
          this.userService.isLoggedIn = true;
          
	this.router.navigate(['/home']);
    } else {
        alert("Authentication failed.")
    }
});
}
}
