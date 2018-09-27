import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent implements AfterViewInit  {

  constructor() { }

  ngAfterViewInit() {
}
  activate(){
    console.log("activated")
  }
}
