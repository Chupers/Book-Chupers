import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalRecord } from '../entity/RentalRecord';
import { GLOBAL_ROOT_URL } from '../GlobalRootConfig';

@Injectable({
  providedIn: 'root'
})
export class RentslRecordService {

  readonly URL = GLOBAL_ROOT_URL.BASE_API_URL + 'record';

  constructor(private _httpClient: HttpClient) {}

  checkAvailability(currentId:number, startDate: string, endDate: string):Observable<boolean>{
    let params = new HttpParams().set("id", currentId.toString()).set("startDate", startDate).set("endDate", endDate);
    return this._httpClient.post<boolean>(this.URL+"/checkAvailability",params);
  }

  reserv(currentId:number, startDate: string, endDate: string):Observable<boolean>{
    let params = new HttpParams().set("id", currentId.toString()).set("startDate", startDate).set("endDate", endDate);
    return this._httpClient.post<boolean>(this.URL,params);
  }

  getRecordServiceByActiveUser(): Observable<RentalRecord[]>{
    return this._httpClient.get<RentalRecord[]>(this.URL);
  }

  getRecordByAccommodation(): Observable<RentalRecord[]>{
    return this._httpClient.get<RentalRecord[]>(this.URL+"/getRentalByAccommodationId")
  }

  confirm(id:number): Observable<any>{
    console.log("hi")
    let params = new HttpParams().set("id", id.toString())
    return this._httpClient.post<any>(this.URL+"/confirmRental",params)
  }
}
