import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Iinfo, Iweather, IsocialInfo } from '../mock/info';
import { Observable } from 'rxjs/internal/Observable';
import { InfoService } from '../info.service';

interface IoutputObj {
  weather: Iweather;
  socialInfo: IsocialInfo;
}

@Component({
  selector: 'app-main-widget',
  templateUrl: './main-widget.component.html',
  styleUrls: ['./main-widget.component.css']
})
export class MainWidgetComponent implements OnInit {

  public info$: Observable<Iinfo[]>;
  public searchText = '';
  public backgroundImage = 'assets/images/1.jpg';

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.info$ = this.infoService.getAllInfo();
    this.infoService.getInfo().subscribe((v) => {
      this.backgroundImage = v.img;
    });
  }

  public setSearchText(e: Event) {
    this.searchText = (e.target as HTMLElement).textContent;
  }

  // tslint:disable-next-line:variable-name
  public _setNewInfo(info: Iinfo) {
    this.infoService.setInfo(info);
  }
}
