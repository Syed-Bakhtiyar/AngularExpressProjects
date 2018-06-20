import { Injectable } from '@angular/core';
import { UserAuthenticationService } from './user.authentication.service';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../variable';
// import { Post } from '../interfaces/posts';

@Injectable()
export class PostServiceService {

  constructor(private auth: UserAuthenticationService,
              private http: HttpClient) { }

  async createPost(post: FormData): Promise<any> {
    return this.http.post(`${BASE_URL}createPost`, post, this.auth.addAuthHeader()).toPromise();
  }

  async getPosts(): Promise<any> {
    return this.http.get(`${BASE_URL}getPosts`, this.auth.addAuthHeader()).toPromise();
  }

}
