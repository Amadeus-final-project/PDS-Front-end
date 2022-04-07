import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';




@Component({
  selector: 'forgottenPassword',
  templateUrl: './forgottenPassword.component.html',
  styleUrls: ['./forgottenPassword.component.css']
})
export class ForgottenPasswordComponent implements OnInit {

    email: string = '';
    authService: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) {   }


  ngOnInit() {
    sessionStorage.setItem('token', '');
}



forgottenPassword() {
  let url = 'http://localhost:9000/users/forgottenPassword';
  let result = this.http.put<any>(url, {
    email: this.email,
}).subscribe((response) => {
    if (response) {
   //  this.authService.forgottenPassword(this.email)
        sessionStorage.setItem(
         'token',
         btoa(this.email)
       );
	this.router.navigate(['']);
    } else {
        alert("Password request failed.")
    }
});
}
}
