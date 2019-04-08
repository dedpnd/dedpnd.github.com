import { Component, OnInit, Input } from '@angular/core';
import { IsocialInfo } from '../mock/info';

@Component({
  selector: 'app-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.css']
})
export class TeddyBearComponent implements OnInit {

  @Input()
  public socialInfo: IsocialInfo;

  constructor() { }

  ngOnInit() {
  }

}
