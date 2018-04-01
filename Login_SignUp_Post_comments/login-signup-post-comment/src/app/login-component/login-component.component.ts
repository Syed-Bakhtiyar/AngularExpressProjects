import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ModelService} from '../modalsAsService/model.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  providers:[ModelService]
})
export class LoginComponentComponent implements OnInit {

  
  private email:string;
  private password:string;
  

  constructor(private modalAsService : ModelService,private router: Router) { }

  ngOnInit() {
  }

  onLogin(form : NgForm){
    console.log(form.value.email,form.value.password);
    this.modalAsService.getUserAccount(form.value.email,form.value.password)
    .subscribe(data => {
      console.log(data);
    })
  }

  openSignUpForm(){
    this.router.navigate(["/signup"]);
  }

}
