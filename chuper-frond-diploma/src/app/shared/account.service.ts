import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../entity/Account';
import { GLOBAL_ROOT_URL } from '../GlobalRootConfig';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  readonly URL = GLOBAL_ROOT_URL.BASE_API_URL + "account/"

  constructor(private _httpClient: HttpClient) {}

  getAccount():Observable<any>{
    return this._httpClient.get<any>(this.URL+"active");
  }
}
