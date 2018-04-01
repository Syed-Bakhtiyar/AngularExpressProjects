import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {UserModel} from './user-model'

@Injectable()
export class ModelService {

  private URL_LOCAL:string = 'http://localhost:3000/';
  user:UserModel;
  userItem:UserModel;

  constructor(private http:Http) { }

  createUserAccount(first_name, last_name, email, password){
      let body = `first_name=${first_name}&last_name=${last_name}&email=${email}&password=${password}`;
      let header_options = new Headers({'Content-Type':'application/x-www-form-urlencoded',"cache-control": "no-cache"});
      let request_option = new RequestOptions({method : RequestMethod.Post, headers : header_options});
      return this.http.post('insertEmployee',body,request_option).map(x => x.json());
      
  }

  getUserAccount(email, password){
      let body = `email=${email}&password=${password}`;
      let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded',"cache-control": "no-cache"});
      let request_option = new RequestOptions({method : RequestMethod.Post, headers: headers});
      return this.http.post(this.URL_LOCAL+'userlogin',body,request_option).map(x => x.json());
  }

}
