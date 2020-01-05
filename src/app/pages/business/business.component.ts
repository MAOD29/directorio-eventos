import { Component, OnInit } from '@angular/core';
import { Business, DataResponse } from '../../other/interfaces'
import { BusinessService } from '../../services/business.service'

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {


  businesses: Business[]
  length : number
  currentPage: number = 0
  pageSize: number = 6

  constructor(
    private _business: BusinessService
  ) { }
  ngOnInit() {
    this._business.getData().subscribe((data) => {
      this.length = data.data.total
      this.businesses = data.data.data
    })
  }
  
  handlerPaginator(e:any) {
    //console.log(e)
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    let id: number = e.pageIndex + 1

    this._business.getData(id).subscribe(data =>  this.businesses = data.data.data )
  }
}
