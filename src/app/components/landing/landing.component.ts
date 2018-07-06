import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LunerapiService } from '../../services/lunerapi.service'
import { PostsService } from '../../services/posts.service'
import { Data } from '../../models/calendarapiresponse'
import { Post } from '../../models/post'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  calendar:Data
  posts:Post[]
  constructor(
    private http: HttpClient,
    private LunerapiService:LunerapiService,
    private PostsService:PostsService
  ) { }

  ngOnInit() {
    this.LunerapiService.getLunerInfo(this.getFormatedDate()).subscribe((res) => {
      if (res.msg==="请求成功") {
      this.calendar=res.data
    }});
    this.PostsService.getPosts().subscribe((res)=>{
      this.posts=res
    })
  }
  getFormatedDate():string{
    const rawdate = new Date()
    return rawdate.getFullYear() + "-" + ("0"+(rawdate.getMonth()+1)).slice(-2) + "-"+ ("0" + rawdate.getDate()).slice(-2)
  }

}
