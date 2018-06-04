import { Component, OnInit } from '@angular/core';
import {SignUpInterface} from '../shared/interfaces/userSignUpInterface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userSignUpInterface: SignUpInterface = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
