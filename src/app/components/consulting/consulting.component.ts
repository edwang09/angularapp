import { Component, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent implements AfterViewInit  {

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    title.setTitle('风水咨询 | 咨询服务内容')
    meta.addTag({name: 'description', content: '八字全相 $200，流年命相 $90，住宅风水 $368 起，商业风水 $428 起，玄空飞星风水流年布局 $80，普通择日 $100，结婚择日 $200 '});
    meta.addTag({name: 'keywords', content: '风水咨询 风水服务 咨询服务内容 夏洛特 科学统计'}); 
    meta.addTag({httpEquiv: 'Content-Type', content: 'text/html'}); 
    meta.addTag({name: 'robots', content: 'INDEX, FOLLOW'}); 
  }

  ngAfterViewInit() {
}
  activate(){
    console.log("activated")
  }
}
