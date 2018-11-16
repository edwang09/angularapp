import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title
    ) { 
      title.setTitle('关于殷绵 | 新生代女风水师')
      meta.addTag({name: 'description', content: '了解殷绵，新生代女风水师'});
      meta.addTag({name: 'keywords', content: '殷绵 新生代女风水师 科学统计'}); 
      meta.addTag({httpEquiv: 'Content-Type', content: 'text/html'}); 
      meta.addTag({name: 'robots', content: 'INDEX, FOLLOW'}); 
  }

  ngOnInit() {
  }

}
