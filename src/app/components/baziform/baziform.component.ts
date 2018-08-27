import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
import { BirthService } from '../../services/birth.service'
import { BaziForm } from '../../models/bazi'
import {ModalComponent} from '../@common/modal/modal.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-baziform',
  templateUrl: './baziform.component.html',
  styleUrls: ['./baziform.component.scss']
})
export class BaziformComponent implements OnInit {
  baziForm:BaziForm
  showresult
  showloading
  modal={
    open:false,
    title:"",
    body:""
  }
  result= {}
  constructor(private BirthService:BirthService,private modalService: NgbModal) { }

  ngOnInit() {
    this.showresult=false
    this.showloading=false
    this.baziForm={ 
      birthplace:"Fort Mill",
      day:"22",
      gender:"0",
      hour:"2",
      longitute1:120,
      longitute2:"0",
      min:"15",
      month:"7",
      year:"2018"
  }
    this.result={

    }
  }
  minChange($event){
    this.baziForm.min=$event.value
  }
  hourChange($event){
    this.baziForm.hour=$event.value
  }
  genderChange($event){
    this.baziForm.gender=$event.value
  }
  dateChange($event){
    this.baziForm.year=$event.value.getFullYear().toString()
    this.baziForm.month=$event.value.getMonth().toString()
    this.baziForm.day=$event.value.getDate().toString()
  }
  close(){
    this.modal.open=false
  }
  onSubmit(){
    const { gender,birthplace, year,month, day, hour,min, longitute1 }=this.baziForm
    console.log(this.baziForm)
    if (gender && birthplace && year && month && day &&  hour && min && longitute1){
      this.showloading=true
      this.BirthService.getBaziInfo(this.baziForm).subscribe(
        (res) => {
          this.showresult=true
          this.result=res
        },
        err=>{
          console.error(err)
        }
      )
    }else{
      console.log("modal")
      
      const modalRef = this.modalService.open(ModalComponent);
      modalRef.componentInstance.title = '信息不全';
      modalRef.componentInstance.body = '请完成表格。';
    }
  }
  get diagnostic() { return JSON.stringify(this.baziForm); }
}
