import { Component, OnInit } from '@angular/core';
import { UserAuthenticationInterface } from '../shared/interfaces/userLoginInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAuthentication: UserAuthenticationInterface = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
