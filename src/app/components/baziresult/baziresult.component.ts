import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-baziresult',
  templateUrl: './baziresult.component.html',
  styleUrls: ['./baziresult.component.scss']
})
export class BaziresultComponent implements OnInit, OnChanges {
  @Input() result;
  @Output() retry = new EventEmitter();
  constructor() { }

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
