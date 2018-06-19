import { Component, OnInit } from '@angular/core';
import { UserAuthenticationInterface } from '../shared/interfaces/userLoginInterface';
import { UserAuthenticationService } from '../shared/services/user.authentication.service';

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

  constructor(private authService: UserAuthenticationService ) { }

  ngOnInit() {
  }

  async authenticateUser() {
    try {
      const response = await this.authService.authenticateUser(this.userAuthentication);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
}
