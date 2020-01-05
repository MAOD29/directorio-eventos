import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../other/interfaces'
@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss']
})
export class CardEventComponent implements OnInit {
  
  @Input("data") event: Event

  ngOnInit() {
   
  }

}
