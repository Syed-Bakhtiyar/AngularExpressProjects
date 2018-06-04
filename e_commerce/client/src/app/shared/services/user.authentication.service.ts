import { Injectable } from '@angular/core';
import {UserAuthenticationInterface} from "../interfaces/userLoginInterface";
import {
  HttpEventType,
  HttpClient,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';
import {BASE_URL} from '../../variable';

@Injectable()
export class UserAuthenticationService {


  constructor(private http: HttpClient) { }

  async authenticateUser(user: UserAuthenticationInterface){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post( `${BASE_URL}authenticate`, user, httpOptions).toPromise();
  }

}
