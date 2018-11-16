import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
import { BirthService } from '../../services/birth.service'
import { BaziForm } from '../../models/bazi'
import {ModalComponent} from '../@common/modal/modal.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Meta, Title } from '@angular/platform-browser';

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
  constructor(
    private BirthService:BirthService,
    private modalService: NgbModal,
    private meta: Meta,
    private title: Title) {
      title.setTitle('八字测算 | 测试你的生辰八字')
      meta.addTag({name: 'description', content: '八测试你的生辰八字， 专业又准确的八字测算 '});
      meta.addTag({httpEquiv: 'Content-Type', content: 'text/html'}); 
      meta.addTag({name: 'robots', content: 'INDEX, FOLLOW'}); 
  
     }

  ngOnInit() {
    this.showresult=false
    this.showloading=false
    this.baziForm={ 
      birthplace:"",
      day:"",
      gender:"",
      hour:"",
      longitute1:120,
      longitute2:"0",
      min:"",
      month:"",
      year:""
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
          this.showloading=false
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
      this.showloading=false
    }
  }
  retry(){
    this.showresult=false;
    this.result={}
  }
  get diagnostic() { return JSON.stringify(this.baziForm); }
}
