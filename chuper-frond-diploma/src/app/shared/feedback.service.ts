import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accommodation } from '../entity/Accommodation';
import { Review } from '../entity/FeedBack';
import { GLOBAL_ROOT_URL } from '../GlobalRootConfig';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  readonly URL = GLOBAL_ROOT_URL.BASE_API_URL + "feedback/"

  constructor(private _httpClient: HttpClient) { }


  putFeedBack(id:number,countStart:number,text:string):Observable<Accommodation>{
    let params = new HttpParams().set("id",id.toString()).set("countStar",countStart.toString()).set("text",text)
    return this._httpClient.post<Accommodation>(this.URL+"addFeedback",params)
  }
}
