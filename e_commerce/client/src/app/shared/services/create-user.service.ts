import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SignUpInterface } from '../interfaces/userSignUpInterface';
import { BASE_URL } from '../../variable';

@Injectable()
export class CreateUserService {

  constructor(private http: Http ) { }

  async createUser(user: SignUpInterface): Promise<any> {
    return this.http.post(`${BASE_URL}createUser`, user).toPromise();
  }
}
