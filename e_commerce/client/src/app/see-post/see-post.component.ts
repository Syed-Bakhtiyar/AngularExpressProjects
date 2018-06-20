import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../shared/services/post-service.service';
import { Post } from '../shared/interfaces/posts';
import { BASE_URL } from '../variable';

@Component({
  selector: 'app-see-post',
  templateUrl: './see-post.component.html',
  styleUrls: ['./see-post.component.css']
})
export class SeePostComponent implements OnInit {

  private posts: Post;
  constructor(private postService: PostServiceService) { }

  async ngOnInit() {
    const response = await this.postService.getPosts();
    this.posts = response.data;
    console.log(this.posts);
  }

  getUrl(endPoint) {
    console.log();
    return `${BASE_URL}getImage?path=${endPoint}`;
  }
}
