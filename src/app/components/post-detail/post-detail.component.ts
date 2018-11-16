import { Component, OnInit, OnDestroy } from '@angular/core';
import {Post} from '../../models/Post';
import {PostsService} from '../../services/posts.service';
import {Router, ActivatedRoute} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
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
    private flashMessage: FlashMessagesService,
    private _scrollToService: ScrollToService,
    private meta: Meta,
    private title: Title
  ) { 
    meta.addTag({httpEquiv: 'Content-Type', content: 'text/html'}); 
    meta.addTag({name: 'robots', content: 'INDEX, FOLLOW'}); 
}

  ngOnInit() {
    this.getContent()
    this.routersub = this.router.events.subscribe((val) => {
      this.getContent()
      const config: ScrollToConfigOptions = {
        target: "title"
      };
      this._scrollToService.scrollTo(config);
    });
    if (this.post){
      this.title.setTitle(this.post.title)
      this.meta.addTag({name: 'keywords', content: this.post.title}); 

    }

  }

  getContent(){
    // Get id from url
    this.id = this.route.snapshot.params['id'];
    // Get this post
    this.postService.getPost(this.id).subscribe(post => {
      //console.log(post)
      this.post = post;
      this.title.setTitle(post.title)
      this.meta.addTag({name: 'keywords', content: post.title}); 
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
      this.postService.deletePost(this.post.id);
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
