import { Component } from '@angular/core';
import { Iweather, IsocialInfo } from './mock/info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public weather: Iweather = {
    title: '-',
    icon: 'cloud',
    water: 0,
    temperature: 0
  };

  public socialInfo: IsocialInfo = {
    title: '-',
    img: 'assets/images/b1.jpg',
    followers: 0,
    following: 0
  };

  setNewInfo(val: {
    weather: Iweather,
    socialInfo: IsocialInfo
  }) {
    this.weather = val.weather;
    this.socialInfo = val.socialInfo;
  }
}
