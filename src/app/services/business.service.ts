import { Injectable } from '@angular/core';
import {Response } from '../other/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(
    private _http : HttpClient
  ) { }

  getData(page: number = 1): Observable<Response>{
   
    return this._http.get<Response>(`http://backendeventos.test/api/v1/business?page=${page}`)
  }

}
