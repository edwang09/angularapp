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
  today:Data = {date:""}
  constructor(
    private http: HttpClient,
    private LunerapiService:LunerapiService
  ) { }

  ngOnInit() {
    
    this.LunerapiService.getLunerInfo(this.LunerapiService.getFormatedDate()).subscribe((res) => {
      if (res.msg==="请求成功") {
        console.log(res.data)
        this.today=res.data
    }});
  }

}
