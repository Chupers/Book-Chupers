import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL_ROOT_URL } from '../GlobalRootConfig';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

readonly SIGN_UP_URL = GLOBAL_ROOT_URL.BASE_API_URL + "account/create"
readonly LOGIN_URL = GLOBAL_ROOT_URL.BASE_API_URL + "login"

constructor(private _httpClient: HttpClient) { }

signUp(username:string,password:string):Observable<any>{
  let params = new HttpParams().set("name",username).set("password",password)
  return this._httpClient.post(this.SIGN_UP_URL,params)
}

login(username:String,password:String):Observable<any>{
  let body:any = {username : username, password : password}
  return this._httpClient.post<any>(this.LOGIN_URL,body,{observe:'response',responseType:'json'})
}

public isLoggedIn(){
  return localStorage.getItem('ACCESS_TOKEN') !== null;
}

public logout(){
  localStorage.removeItem('ACCESS_TOKEN');
}



}
