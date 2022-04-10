import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


export interface EditUser {
  phoneNumber: number;
  firstName: string,
  lastName: string,
  email: string
}

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  // model: object | undefined {
  //   phoneNumber:number,
  //   firstName: this.model.firstName,
  //   lastName: this.model.lastName,
  //   email: this.model.email

  // }

  editProfileModel: EditUser = {

    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0
  };


  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

  }
  editProfile():void{
    let url = "http://localhost:9000/users/edit";
    console.log(this.editProfileModel);
    let result =  this.http.put<EditUser>(url, this.editProfileModel)
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


// signIn(provider) {
//   this._auth.login(provider).subscribe(
//     (data:any) => {
//       console.log(data);
//       this.hideForm = false;

//       this.emaill = data.email;
//       this.nom = data.last_name;
//       this.prenom = data.first_name;
//       this.profileImage = data.image;
//   })
// }