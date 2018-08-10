import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LunerapiService } from '../../services/lunerapi.service'
import { PostsService } from '../../services/posts.service'
import { Data } from '../../models/calendarapiresponse'
import { Post } from '../../models/Post'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:Post[]
  constructor(
    private PostsService:PostsService
  ) { }

  ngOnInit() {
    this.PostsService.getPosts().subscribe((res)=>{
      this.posts=res
    })
  }

}
