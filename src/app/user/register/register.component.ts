import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model2:any = {};

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }



  ngOnInit() {
    sessionStorage.setItem('token', '');
}


register():void{
  let url = "http://localhost:9000/users/register";
  let result =  this.http.post<Observable<boolean>>(url, {
    username: this.model2.username,
    firstName: this.model2.firstName,
    lastName: this.model2.lastName,
    password: this.model2.password,
    confirmPassword: this.model2.confirmPassword,
    email: this.model2.email
})
  .subscribe((response) => {
    if (response) {
      this.router.navigate(['/login']);
    }else {
      alert("Registration failed");
    }
  })
}

}
