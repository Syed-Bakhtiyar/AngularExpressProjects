import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CookieServicesService {

  constructor(private cookieService: CookieService) { }

  saveAuthToken(token: string) {
    this.cookieService.set('token', token);
  }

  getAuthToken(): string {
    return this.cookieService.get('token') || '';
  }
}
