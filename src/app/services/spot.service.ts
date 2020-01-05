import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Spot, Response } from '../other/interfaces'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpotService  {
  data : Spot[] 

  constructor(
    private _http: HttpClient
  ) { }

  getData(): Observable <Response>{
    return this._http.get<Response>('http://backendeventos.test/api/v1/spot')
  }
}
