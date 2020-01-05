import { Component, OnInit, Input } from '@angular/core';
import { Business } from '../../other/interfaces'
@Component({
  selector: 'app-card-business',
  templateUrl: './card-business.component.html',
  styleUrls: ['./card-business.component.scss']
})
export class CardBusinessComponent implements OnInit {

  @Input("data") business: Business

  ngOnInit() {
    
  }


}
