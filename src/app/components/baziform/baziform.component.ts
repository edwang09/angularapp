import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
import { BirthService } from '../../services/birth.service'

@Component({
  selector: 'app-baziform',
  templateUrl: './baziform.component.html',
  styleUrls: ['./baziform.component.scss']
})
export class BaziformComponent implements OnInit {
  gender="1";
  year="";
  month="";
  day="";
  birthplace="";
  longitute="";
  hour="";
  min="";
  result= {}
  constructor(private BirthService:BirthService) { }

  ngOnInit() {

  }
  dateChange($event){
    this.year=$event.value.getFullYear().toString()
    this.month=$event.value.getMonth().toString()
    this.day=$event.value.getDay().toString()
  }
  onSubmit(){
    console.log("submit")
    const { gender,birthplace, year,month, day, hour,min }=this
    const data = {gender,birthplace, year,month, day, hour,min,longitute1:this.longitute.toString(),longitute2:"0"}
    console.log(data)
    this.BirthService.getBaziInfo(data).subscribe(
      (res) => {
        console.log(res)
        if (res.data) {
        console.log(res.data)
      }}
    )
  }
}
