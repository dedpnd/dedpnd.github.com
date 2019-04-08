import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { info$, Iinfo, Iweather, IsocialInfo } from '../mock/info';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-main-widget',
  templateUrl: './main-widget.component.html',
  styleUrls: ['./main-widget.component.css']
})
export class MainWidgetComponent implements OnInit {

  @Output() setNewInfo = new EventEmitter();

  public info$: Observable<Iinfo[]> = info$;
  public searchText = '';
  public backgroundImage = '../assets/images/1.jpg';

  constructor() { }

  ngOnInit() {
  }

  public setSearchText(e: Event) {
    this.searchText = (e.target as HTMLElement).textContent;
  }

  public setBackgroundImage(img: string) {
    this.backgroundImage = img;
  }

  // tslint:disable-next-line:variable-name
  public _setNewInfo(_weather: Iweather, _social_info: IsocialInfo) {
    this.setNewInfo.emit({
      weather: _weather,
      socialInfo: _social_info
    });
  }
}
