import { Component, OnInit, Input } from '@angular/core';
import { Iweather } from '../mock/info';

@Component({
  selector: 'app-temp-widget',
  templateUrl: './temp-widget.component.html',
  styleUrls: ['./temp-widget.component.css']
})
export class TempWidgetComponent implements OnInit {

  @Input()
  public weather: Iweather;

  constructor() { }

  ngOnInit() {
  }

}
