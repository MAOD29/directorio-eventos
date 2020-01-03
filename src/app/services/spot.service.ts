import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Spot, SpotResponse } from '../other/interfaces'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpotService  {
  data : Spot[] 

  constructor(
    private _http: HttpClient
  ) { }

  getData(): Observable <SpotResponse>{
    return this._http.get<SpotResponse>('http://backendeventos.test/api/v1/spot')
  }
}
