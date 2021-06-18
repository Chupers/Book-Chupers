import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accommodation } from '../entity/Accommodation';
import { GLOBAL_ROOT_URL } from '../GlobalRootConfig';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  readonly URL = GLOBAL_ROOT_URL.BASE_API_URL + "accommodation/"

  constructor(private _httpClient: HttpClient) { }

  initAccommodation(name : string, type: string) : Observable<any>{
    let params = new HttpParams().set("name",name).set("placeType",type);
    return this._httpClient.post(this.URL+"init",params)
  }

  getActiveAccommodation():Observable<Accommodation>{
    return this._httpClient.get<any>(this.URL+"active")
  }

  loadImageByFile(file: File ,id : number):Observable<any>{
    const formData = new FormData();
    formData.append('id',id.toString());
    formData.append('file',file)
    return this._httpClient.put<any>(this.URL+"loadPhotoByIdGoogle",formData)
  }

  updateBasicInfo(country : string,name:string, city : string, street : string, description : string, guestCount : number, roomCount : number, bedCount: number, pricePerDay : number):Observable<any>{
    let param = new HttpParams().set("country",country)
    .set("city",city)
    .set("country",country)
    .set("street",street)
    .set("name",name)
    .set("description",description)
    .set("guestCount",guestCount.toString())
    .set("roomCount",roomCount.toString())
    .set("bedCount",bedCount.toString())
    .set("price",pricePerDay.toString())
    return this._httpClient.post(this.URL+"updateBasicInfo",param)
  }

  addCharacteristic(accommodation: number, text:string, icon:string):Observable<any>{
    let param = new HttpParams().set("id",accommodation.toString())
    .set("icon",icon)
    .set("text",text)
    return this._httpClient.put(this.URL+"addCharacteristic",param)
  }

  getAccommodationById(id:number):Observable<Accommodation>{
    let param = new HttpParams().set("id",id.toString());
    return this._httpClient.post<Accommodation>(this.URL+"findById",param)
  }

  markFavorite(id:number):Observable<Accommodation>{
    let param = new HttpParams().set("id",id.toString());
    return this._httpClient.post<Accommodation>(this.URL+"markFavorite",param)
  }

  findBySubString(value : string):Observable<Accommodation[]>{
    let param = new HttpParams().set("subString",value);
    return this._httpClient.post<Accommodation[]>(this.URL+"searchBySubString",param);
  }

  findFavorite():Observable<Accommodation[]>{
    return this._httpClient.get<Accommodation[]>(this.URL+"getFavorite");
  }

  search( startDate: string, endDate: string, minPrice: number, maxPrice : number ,subString : string, type : string) : Observable<Accommodation[]>{
    let param = new HttpParams().set("subString",subString)
    .set("minPrice",minPrice.toString())
    .set("maxPrice",maxPrice.toString())
    .set("type",type)
    .set("startDate",startDate)
    .set("endDate",endDate)
    return this._httpClient.post<Accommodation[]>(this.URL+"extraSearch",param)
  }
}
