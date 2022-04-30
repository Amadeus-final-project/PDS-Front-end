import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PackageService } from 'src/app/package/package.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent  {

  constructor(private userService: UserService,
    private packageService: PackageService,
    private router: Router) { }
    
    public get isLogged(): boolean {
      return !!this.userService.isLoggedIn;
    }
  
    logout():void{
      sessionStorage.removeItem('token');
      this.router.navigate(['/logout']);
      this.userService.isLoggedIn = false;
    }


}

