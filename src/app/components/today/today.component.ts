import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LunerapiService } from '../../services/lunerapi.service'
import { PostsService } from '../../services/posts.service'
import { Data } from '../../models/calendarapiresponse'
import { Post } from '../../models/post'

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  calendar:Data
  DateToday:{
    year: String,
    month: String,
    date: String
  }
  constructor(
    private http: HttpClient,
    private LunerapiService:LunerapiService
  ) { }

  ngOnInit() {
    
    const rawdate = new Date();
    this.DateToday={
      year:rawdate.getFullYear().toString(),
      month:(rawdate.getMonth()+1).toString() ,
      date:rawdate.getDate().toString()
    }
    this.LunerapiService.getLunerInfo(this.LunerapiService.getFormatedDate()).subscribe((res) => {
      if (res.data) {
        this.calendar=res.data
    }});
  }

}
