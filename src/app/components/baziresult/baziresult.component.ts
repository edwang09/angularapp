import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-baziresult',
  templateUrl: './baziresult.component.html',
  styleUrls: ['./baziresult.component.scss']
})
export class BaziresultComponent implements OnInit, OnChanges {
  @Input() result;
  constructor() { }

  ngOnInit() {
    console.log(this.result)
  }
  ngOnChanges() {
    console.log(this.result)
  }
  

}
