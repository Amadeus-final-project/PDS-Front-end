import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';



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
}



login() {
  let url = 'http://localhost:9000/users/login';
  let result = this.http.post<Observable<boolean>>(url, {
    username: this.model.username,
    password: this.model.password
}).subscribe((isValid) => {
    if (isValid) {
        sessionStorage.setItem(
          'token', 
          btoa(this.model.username + ':' + this.model.password)
        );
	this.router.navigate(['']);
    } else {
        alert("Authentication failed.")
    }
});
}
}
