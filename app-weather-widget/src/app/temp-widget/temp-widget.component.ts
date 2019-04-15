import { Component, OnInit, Input } from '@angular/core';
import { Iweather, Iinfo } from '../mock/info';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-temp-widget',
  templateUrl: './temp-widget.component.html',
  styleUrls: ['./temp-widget.component.css']
})
export class TempWidgetComponent implements OnInit {

  public weather: Iweather = {
    title: '-',
    icon: 'cloud',
    water: 0,
    temperature: 0
  };

  constructor( private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getInfo().subscribe((v: Iinfo) => {
      this.weather = v.weather;
    });
  }

}
