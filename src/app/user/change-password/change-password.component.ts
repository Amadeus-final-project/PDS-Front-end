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
export class ChangePasswordComponent {

  constructor(    private userService: UserService,
    private router: Router,
    private http: HttpClient) { }


  ChangeModel:ChangePassword = {

    oldPass:'',
    newPass: '',
    confirmPass: '',

  }

  

  changePassword(): void {
      this.userService.changePassword(this.ChangeModel);
  }




}
