import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { calendarApiResponse } from '../models/calendarapiresponse'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LunerapiService {
  LunerDataUrl:string = "https://pacific-plains-62879.herokuapp.com/api/fengshui/calendar"
  secret:string = "ed096b1309889871313a683da0558ae5"
  
  constructor(
    private http: HttpClient
  ) { }



  getLunerInfo (date: string): Observable<calendarApiResponse> {
    const data={
      secret:this.secret,
      date:date
    }
    return this.http.post<calendarApiResponse>(this.LunerDataUrl, data, httpOptions)
  }
  
  getFormatedDate():string{
    const rawdate = new Date()
    console.log(rawdate.getFullYear() + "-" + (rawdate.getMonth()+1)+ "-"+ rawdate.getDate())
    return rawdate.getFullYear() + "-" + (rawdate.getMonth()+1)+ "-"+ rawdate.getDate()
  }
}
