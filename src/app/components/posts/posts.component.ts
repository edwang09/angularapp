import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../../services/posts.service'
import { AuthService } from '../../services/auth.service';
import { Post } from '../../models/Post'
import { filter, pairwise } from "rxjs/operators"
import {Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  routersub
  scrollid
  isLoggedIn
  posts:Post[]
  constructor(
    private authService: AuthService,
    private PostsService:PostsService,
    private router: Router,
    private _scrollToService: ScrollToService
  ) {
  }

  ngOnInit() {
    this.routersub = this.router.events.pipe(
      filter(e => e instanceof RoutesRecognized),
      pairwise()
    ).subscribe((event: any[]) => {
      this.scrollid=event[0].urlAfterRedirects;
      if (this.scrollid && this.scrollid.substring(0,6)=="/post/"){
        setTimeout(
          ()=>{
            //console.log(this.scrollid)
            const config: ScrollToConfigOptions = {
              target: this.scrollid.substring(6)
            };
            this._scrollToService.scrollTo(config);
          },
          300
        )
      }
    })
    this.PostsService.getPosts().subscribe((res)=>{
      this.posts=res
    })
    this.authService.getAuth().subscribe(auth => {
      if(auth) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
}
  

//delete posts
deletePost(postid){
  console.log(postid)
  this.PostsService.deletePost(postid)
  /*
  this.PostsService.getPosts().subscribe((res)=>{
    this.posts=res
  })*/
}


  ngOnDestroy(){
  }

}
