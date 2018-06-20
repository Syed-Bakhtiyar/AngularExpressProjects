import { Injectable } from '@angular/core';
import {UserAuthenticationInterface} from "../interfaces/userLoginInterface";
import {
  HttpEventType,
  HttpClient,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';
import {BASE_URL} from '../../variable';
import { RequestOptionsArgs, Headers } from '@angular/http';
import { CookieServicesService } from './cookie-services.service';
import { SignUpInterface } from '../interfaces/userSignUpInterface';

@Injectable()
export class UserAuthenticationService {

  private user: SignUpInterface;
  constructor(private http: HttpClient,
              private cookieService: CookieServicesService) { }

  async authenticateUser(user: UserAuthenticationInterface) {
    return this.http.post( `${BASE_URL}authenticate`, user, this.addAuthHeader()).toPromise();
  }

  async isUserAuthorized(): Promise<any> {
    return this.http.post(`${BASE_URL}authenticateToken`, null, this.addAuthHeader()).toPromise();
  }

  addAuthHeader(): any {
    // headers.append('Content-Type', 'multipart/form-data');
    //     headers.append('Accept', 'application/json');
    // ; boundary="-------314159265358979323846"
    const httpHeaderOptions = {
      headers: new HttpHeaders({
        'authorization': this.cookieService.getAuthToken()
      })
    };
    return httpHeaderOptions;
  }

  setUser(user: SignUpInterface) {
    this.user = user;
  }

  getUser(): SignUpInterface {
    return this.user;
  }
}
