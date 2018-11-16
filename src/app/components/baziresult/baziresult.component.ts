import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-baziresult',
  templateUrl: './baziresult.component.html',
  styleUrls: ['./baziresult.component.scss']
})
export class BaziresultComponent implements OnInit, OnChanges {
  @Input() result;
  @Output() retry = new EventEmitter();
  constructor(
    private meta: Meta,
    private title: Title
    ) { 
      title.setTitle('测算结果 | 生辰八字测算结果')
      meta.addTag({httpEquiv: 'Content-Type', content: 'text/html'}); 
      meta.addTag({name: 'robots', content: 'NOINDEX, NOFOLLOW'}); 
    }

  ngOnInit() {
    console.log(this.result)
  }
  ngOnChanges() {
    console.log(this.result)
  }
  back(){
    console.log("goback")
    this.retry.emit()
  }
  

}
