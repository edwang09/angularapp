import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LunerapiService } from '../../services/lunerapi.service'
import { PostsService } from '../../services/posts.service'
import { Data } from '../../models/calendarapiresponse'
import { Post } from '../../models/Post'
import { Meta, Title } from '@angular/platform-browser';

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
    private LunerapiService:LunerapiService,
    private meta: Meta,
    private title: Title
  ) {
    title.setTitle('紫水晶风水咨询 | 权威风水咨询')
    meta.addTag({name: 'description', content: '紫水晶风水咨询为殷绵（一位目前在美国北卡夏洛特居住的女玄学家）所创办。因启蒙师承于香港，并受西方引证思维影响，认为风水玄学皆有科学统计性依据，是一门宝贵的生活经验智慧。希望能让更多人正确认识风水，并用风水帮助更多人，让风水这门宝贵的学问走得更远。'});
    meta.addTag({name: 'keywords', content: '紫水晶风水咨询 风水咨询 玄学 夏洛特 科学统计'}); 
    meta.addTag({httpEquiv: 'Content-Type', content: 'text/html'}); 
    meta.addTag({name: 'robots', content: 'INDEX, FOLLOW'}); 
   }

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
