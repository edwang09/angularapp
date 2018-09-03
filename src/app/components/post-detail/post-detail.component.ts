import { Component, OnInit, OnDestroy } from '@angular/core';
import {Post} from '../../models/Post';
import {PostsService} from '../../services/posts.service';
import {Router, ActivatedRoute, Params, NavigationEnd, RoutesRecognized } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy{
  post: Post;
  routersub;
  id:string;
  nextpost: Post;
  prevpost: Post;
  constructor(
    private postService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.getContent()
    this.routersub = this.router.events.subscribe((val) => {
      this.getContent()
    });
  }

  getContent(){
    // Get id from url
    this.id = this.route.snapshot.params['id'];
    // Get this post
    this.postService.getPost(this.id).subscribe(post => {
      //console.log(post)
      this.post = post;
    });
    // Get next and previous posts
    this.postService.getPosts().subscribe(res => {
      var index = res.findIndex((post)=>{return post.id==this.id})
      this.prevpost = res[index-1]
      this.nextpost = res[index+1]
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

  ngOnDestroy(){
    this.routersub.unsubscribe()
  }
}
