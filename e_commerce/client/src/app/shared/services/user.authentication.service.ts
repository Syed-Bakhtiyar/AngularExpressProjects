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

@Injectable()
export class UserAuthenticationService {


  constructor(private http: HttpClient, private cookieService: CookieServicesService) { }

  async authenticateUser(user: UserAuthenticationInterface) {
    const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post( `${BASE_URL}authenticate`, user, httpOptions).toPromise();
  }

  addAuthHeader(args: RequestOptionsArgs = {}): RequestOptionsArgs {
    if (!args.headers) {
      args.headers = new Headers();
    }

    if (this.cookieService.getAuthToken) {
      args.headers.set( 'Authorization', this.cookieService.getAuthToken() );
      return args;
    }

    return args;
  }
}
