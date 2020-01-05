import { Component, OnInit } from '@angular/core';
import { Event } from '../../other/interfaces'
import { EventService } from '../../services/event.service'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
 
  events : Event[]

  length : number
  currentPage: number = 0
  pageSize: number = 6
 
  constructor(
    private _event:EventService
  ) { }
  
  
  ngOnInit() {
    this._event.getData().subscribe(res => {
      this.length = res.data.total
      this.events = res.data.data
    })
   
    
  }
  handlerPaginator(e:any) {
    //console.log(e)
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    let id: number = e.pageIndex + 1

    this._event.getData(id).subscribe(data =>  this.events = data.data.data )
  }

}
