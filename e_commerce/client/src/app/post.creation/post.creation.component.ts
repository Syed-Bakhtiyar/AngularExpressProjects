import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../shared/services/user.authentication.service';
import { Post } from '../shared/interfaces/posts';
import { PostServiceService } from '../shared/services/post-service.service';

@Component({
  selector: 'app-post.creation',
  templateUrl: './post.creation.component.html',
  styleUrls: ['./post.creation.component.css']
})
export class PostCreationComponent implements OnInit {

  files: FileList;
  postData: Post = {
    user_id: 0,
    post: ''
  };
  constructor(private authService: UserAuthenticationService,
              private postService: PostServiceService) { }

  ngOnInit() {
    console.log(this.authService.getUser());
  }

  selectFile(event) {
    this.files = event.target.files;
    console.log(this.files);
  }

  async post() {
    try {
      const formData: FormData = new FormData();
      const file: File = this.files && this.files.length ? this.files[0] : null;
      formData.append('file', file);
      formData.append('data', JSON.stringify(this.postData));
      console.log(formData.get('data'),  JSON.stringify(this.postData));
      const res = await this.postService.createPost(formData);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
}
