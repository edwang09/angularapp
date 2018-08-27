import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirthService {


  BaziUrl:string = "https://pacific-plains-62879.herokuapp.com/api/fengshui/birth"
  //BaziUrl:string = "http://localhost:8080/api/fengshui/birth"
  
  constructor(private http: HttpClient) { }
  getBaziInfo (data: any): Observable<any> {
    return this.http.post<any>(this.BaziUrl, data)
  }
}
