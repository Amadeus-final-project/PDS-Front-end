import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangePassword } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  ChangeModel:ChangePassword = {

    oldPass:'',
    newPass: '',
    confirmPass: '',

  }


  changePassword(): void {
    //let url = 'http://localhost:9000/users/forgottenPassword';
    let result = this.http.put<ChangePassword>(this.userService.baseUsersURL + '/changePassword', 
      this.ChangeModel
  ).subscribe((response) => {
      if (response) {
        this.router.navigate(['/customer-home']);
      } else {
          alert("Password request failed.")
      }
  });
  }




}
