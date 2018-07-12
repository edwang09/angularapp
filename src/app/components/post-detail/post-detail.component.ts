import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/Post';
import {PostsService} from '../../services/posts.service';
import {Router, ActivatedRoute, Params } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  id:string;
  constructor(
    private postService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params['id'];
    // Get client
    this.postService.getPost(this.id).subscribe(post => {

      console.log(post)
      this.post = post;
    });
  }

  onDeleteClick() { 
    if(confirm('Are you sure?')) {
      this.postService.deletePost(this.post);
      this.flashMessage.show('Post removed', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/']);
    }
  }

}
