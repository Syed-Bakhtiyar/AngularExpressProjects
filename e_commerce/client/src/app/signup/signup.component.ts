import { Component, OnInit } from '@angular/core';
import {SignUpInterface} from '../shared/interfaces/userSignUpInterface';
import { CreateUserService } from '../shared/services/create-user.service';
import { CookieService } from 'ngx-cookie-service';
import { SweetAlertService } from '../shared/services/sweet-alert.service';
// import { ToastrService } from 'ngx-toastr';

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
  };

  constructor(private createUserService: CreateUserService,
              private sweetAlertService: SweetAlertService) { }

  ngOnInit() {
  }

  async createUser() {
    try {
      const response = await this.createUserService.createUser(this.userSignUpInterface);
      console.log(response);
      this.sweetAlertService.showDialog('Blog Post', 'User Created Successfully', 'success');
    } catch (e) {
      console.log(e);
      this.sweetAlertService.showDialog('Blog Post', 'User Is Not Created', 'error');
    }
  }

}
