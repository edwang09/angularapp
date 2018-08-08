import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LunerapiService } from '../../services/lunerapi.service'
import { PostsService } from '../../services/posts.service'
import { Data } from '../../models/calendarapiresponse'
import { Post } from '../../models/post'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  calendar: Data
  DateToday:{
    year: String,
    month: String,
    date: String
  }
  posts:Post[]
  constructor(
    private http: HttpClient,
    private LunerapiService:LunerapiService,
    private PostsService:PostsService
  ) { }

  ngOnInit() {
    const rawdate = new Date();
    this.DateToday={
      year:rawdate.getFullYear().toString(),
      month:(rawdate.getMonth()+1).toString() ,
      date:rawdate.getDate().toString()
    }
    this.LunerapiService.getLunerInfo(this.getFormatedDate()).subscribe((res) => {
      if (res.data) {
      this.calendar=res.data
    }});
  }
  getFormatedDate():string{
    const rawdate = new Date()
    return rawdate.getFullYear() + "-" + (rawdate.getMonth()+1) + "-"+  rawdate.getDate()
  }

}
