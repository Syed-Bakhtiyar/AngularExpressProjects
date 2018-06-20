import { Component, OnInit } from '@angular/core';
import { UserAuthenticationInterface } from '../shared/interfaces/userLoginInterface';
import { UserAuthenticationService } from '../shared/services/user.authentication.service';
import { CookieServicesService } from '../shared/services/cookie-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAuthentication: UserAuthenticationInterface = {
    email: '',
    password: ''
  };

  constructor(private authService: UserAuthenticationService,
              private cookieService: CookieServicesService,
              private router: Router ) { }

  async ngOnInit() {
    try {
        const res = await this.authService.isUserAuthorized();
        if (res.message === 'Authenticated User') {
          this.authService.setUser(res.data);
          this.navigateToDashBoard();
        }
    } catch (e) {
      console.log(e);
    }
  }

  async authenticateUser() {
    try {
      const response = await this.authService.authenticateUser(this.userAuthentication);
      this.cookieService.saveAuthToken(response.authToken);
      this.authService.setUser(response.data);
      this.navigateToDashBoard();
    } catch (e) {
      console.log(e);
    }
  }

  navigateToDashBoard() {
    this.router.navigate(['dashboard']);
  }
}
