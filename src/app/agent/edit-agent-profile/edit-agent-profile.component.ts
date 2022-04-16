import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


export interface EditAgent {
  phoneNumber: number;
  firstName: string,
  lastName: string,
  email: string
}

@Component({
  selector: 'edit-agent-profile',
  templateUrl: './edit-agent-profile.component.html',
  styleUrls: ['./edit-agent-profile.component.css']
})

export class ProfileComponent implements OnInit {


  editProfileModel: EditAgent = {

    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0
  };


  constructor(
    private : UserService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

  }
  editProfile():void{
    //let url = "http://localhost:9000/users/edit";
    console.log(this.editProfileModel);
    let result =  this.http.put<EditUser>(this.userService.baseUsersURL + '/edit', this.editProfileModel)
      .subscribe((data:any) => {
        this.editProfileModel.firstName = data.firstName
        this.editProfileModel.lastName = data.lastName
        this.editProfileModel.email = data.email
        this.editProfileModel.phoneNumber = data.phoneNumber

        if (data) {
          this.router.navigate(['/']);
        }else {
          alert("Edit profile failed");
        }
      })
  }

}
