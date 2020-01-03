import { Component, OnInit } from '@angular/core';
import { SpotService } from '../../services/spot.service'
import { Spot } from '../../other/interfaces'


@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss']
})
export class SpotComponent implements OnInit {

  spots :Spot[]

  constructor(private _spot : SpotService) { }

  ngOnInit() {
    this._spot.getData().subscribe( res => this.spots = res.data.data)
  }

}
