import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private userService: UserService,
    private router: Router) { }



    public get isLogged(): boolean {
      return !!this.userService.isLoggedIn;
    }

  logout():void{
    sessionStorage.removeItem('token');
    this.router.navigate(['/logout']);
    this.userService.isLoggedIn = false;
  }

  ngOnInit(): void {
  }

}
