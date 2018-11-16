import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title) {
      title.setTitle('关于风水 | 什么是风水')
      meta.addTag({name: 'description', content: '风水是一门源于中国古代生活环境智慧。主要是研究生活地理环境,经过精密计算后,以经验和数千年时间验证,分析万物对人体的磁场交感相应,从而生起凶吉祸福,财禄夭寿'});
      meta.addTag({name: 'keywords', content: '关于风水 什么是风水 玄学 夏洛特 科学统计'}); 
      meta.addTag({httpEquiv: 'Content-Type', content: 'text/html'}); 
      meta.addTag({name: 'robots', content: 'INDEX, FOLLOW'}); 
     }

  ngOnInit() {
  }

}
